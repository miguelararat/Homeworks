export class Node {

    nombre: string | null;
    id: number | null;
    next: Node | null;
    constructor(nombre: string | null){
        this.nombre = nombre;
        this.id = Date.now();
        this.next = null;
    }
}