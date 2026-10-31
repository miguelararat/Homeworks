import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';
import { Graph } from '../models/Graph';
import { NodoPersona, NodoCity } from '../models/Node';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  @ViewChild('svg') svgRef!: ElementRef<SVGSVGElement>;

  graph: Graph = new Graph();
  private simulation?: d3.Simulation<any, any>;
  private cityCount = 0;
  private personCount = 0;

  // Formulario ciudad
  cityName = '';

  // Formulario persona
  personName = '';
  personAge: number | null = null;
  personCityId = '';

  // Formulario relación
  relPersonId = '';
  relCityId = '';

  // Consulta por ciudad
  selectedCityId = '';
  peopleInCity: NodoPersona[] = [];

  // Mensajes
  message = '';
  messageType: 'success' | 'danger' = 'success';

  get cities(): NodoCity[] {
    return this.graph.getCities();
  }

  get people(): NodoPersona[] {
    return this.graph.getPeople();
  }

  get peopleWithoutCity(): NodoPersona[] {
    return this.people.filter(p => !this.graph.hasCity(p.id));
  }

  ngAfterViewInit(): void {
    this.drawGraph();
  }

  addCity(): void {
    const name = this.cityName.trim();
    if (!name) return this.notify('Escribe el nombre de la ciudad', 'danger');

    const exists = this.cities.some(c => c.name.toLowerCase() === name.toLowerCase());
    if (exists) return this.notify('Esa ciudad ya existe', 'danger');

    this.graph.addNode(new NodoCity(`c${++this.cityCount}`, name));
    this.cityName = '';
    this.notify(`Ciudad "${name}" agregada`, 'success');
    this.refresh();
  }

  addPerson(): void {
    const name = this.personName.trim();
    if (!name || this.personAge === null || this.personAge < 0) {
      return this.notify('Escribe un nombre y una edad válida', 'danger');
    }

    const id = `p${++this.personCount}`;
    this.graph.addNode(new NodoPersona(id, name, this.personAge));

    if (this.personCityId) {
      this.graph.addEdge(id, this.personCityId);
    }

    this.notify(`Persona "${name}" agregada`, 'success');
    this.personName = '';
    this.personAge = null;
    this.personCityId = '';
    this.refresh();
  }

  addRelation(): void {
    if (!this.relPersonId || !this.relCityId) {
      return this.notify('Selecciona una persona y una ciudad', 'danger');
    }

    const ok = this.graph.addEdge(this.relPersonId, this.relCityId);
    if (!ok) return this.notify('No se pudo crear la relación', 'danger');

    this.relPersonId = '';
    this.relCityId = '';
    this.notify('Relación creada', 'success');
    this.refresh();
  }

  selectCity(cityId: string): void {
    this.selectedCityId = cityId;
    this.peopleInCity = cityId ? this.graph.getPeopleByCity(cityId) : [];
  }

  printGraph(): void {
    this.graph.printGraph();
    this.notify('Grafo impreso en la consola (F12)', 'success');
  }

  private refresh(): void {
    this.selectCity(this.selectedCityId);
    this.drawGraph();
  }

  private notify(msg: string, type: 'success' | 'danger'): void {
    this.message = msg;
    this.messageType = type;
  }

  private drawGraph(): void {
    if (!this.svgRef) return;

    const { nodes, links } = this.graph.toD3Data();
    const width = 800;
    const height = 500;

    this.simulation?.stop();

    const svg = d3.select(this.svgRef.nativeElement);
    svg.selectAll('*').remove();
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 22)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#999');

    this.simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links as any).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#999')
      .attr('marker-end', 'url(#arrow)');

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 14)
      .attr('fill', (d: any) => d.type === 'city' ? '#e07a5f' : '#3d85c6');

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text((d: any) => d.name)
      .attr('font-size', 12)
      .attr('dx', 18)
      .attr('dy', 4);

    this.simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      label
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });
  }
}