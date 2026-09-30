export class NodoMenu {
    titulo: string;
    link: string;
    componente: string;
    hijos: NodoMenu[] = [];

    constructor(titulo: string, link: string, componente: string) {
        this.titulo = titulo;
        this.link = link;
        this.componente = componente;
    }

    addChild(nodo: NodoMenu): void {
        this.hijos.push(nodo);
    }

    isLeaf(): boolean {
        return this.hijos.length === 0;
    }
}