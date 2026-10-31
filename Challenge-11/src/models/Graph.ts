import { GraphNode, NodoPersona, NodoCity } from "./Node";

export interface D3Link {
  source: string;
  target: string;
}

export class Graph {
  nodes: GraphNode[];
  adjList: Record<string, string[]>;

  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node: GraphNode): void {
    if (!this.searchNode(node.id)) {
      this.nodes.push(node);
      this.adjList[node.id] = [];
    }
  }

  // Arista dirigida: persona -> ciudad
  addEdge(fromId: string, toId: string): boolean {
    const from = this.searchNode(fromId);
    const to = this.searchNode(toId);

    if (!from || !to) return false;
    if (from.type !== 'person' || to.type !== 'city') return false;
    if (this.adjList[fromId].length > 0) return false; // una persona solo vive en una ciudad

    this.adjList[fromId].push(toId);
    return true;
  }

  searchNode(id: string): GraphNode | undefined {
    if (!this.nodes.length) return;
    return this.nodes.find(n => n.id === id);
  }

  printAdjacency(id: string): void {
    if (this.searchNode(id)) {
      console.log(this.adjList[id]);
    }
  }

  printGraph(): void {
    console.log(this.adjList);
  }

  getPeople(): NodoPersona[] {
    return this.nodes.filter((n): n is NodoPersona => n instanceof NodoPersona);
  }

  getCities(): NodoCity[] {
    return this.nodes.filter((n): n is NodoCity => n instanceof NodoCity);
  }

  hasCity(personId: string): boolean {
    return (this.adjList[personId]?.length ?? 0) > 0;
  }

  getPeopleByCity(cityId: string): NodoPersona[] {
    const city = this.searchNode(cityId);
    if (!city || city.type !== 'city') return [];

    return this.getPeople().filter(p => this.adjList[p.id].includes(cityId));
  }

  printPeopleByCity(cityId: string): void {
    const people = this.getPeopleByCity(cityId);
    const city = this.searchNode(cityId);

    console.log(`Personas que viven en ${city?.name}:`);
    people.forEach(p => console.log(`- ${p.name} (${p.age} años)`));
  }

  toD3Data(): { nodes: GraphNode[]; links: D3Link[] } {
    const links: D3Link[] = [];

    for (const fromId of Object.keys(this.adjList)) {
      for (const toId of this.adjList[fromId]) {
        links.push({ source: fromId, target: toId });
      }
    }

    // Copias de los nodos, porque d3 les agrega x, y, vx, vy
    const nodes = this.nodes.map(n => ({ ...n }));
    return { nodes, links };
  }
}