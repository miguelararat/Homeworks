export class Node {

    nombre: string;
    edad: number;
    codigo: number;
    id: number;
    next: Node | null;
    constructor(value: string, edad: number, codigo: number){
        this.nombre = value;
        this.next = null;
        this.edad = edad;
        this.codigo = codigo;
        this.id = Date.now();
    }
}
