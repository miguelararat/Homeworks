export class Node {
    valor: number;
    izquierda: Node | null;
    derecha: Node | null;

    constructor(valor: number) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;

    }

    isLeaf(): boolean {
        return this.izquierda === null && this.derecha === null;
    }


}