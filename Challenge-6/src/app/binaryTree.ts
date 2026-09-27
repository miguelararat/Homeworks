import { Node } from "./node";

export class BinaryTree {
    constructor(public raiz: Node | null = null ) {
        
    }

    insertar(valor: number): void {
        const nuevoNodo = new Node(valor)
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;
        }   
        
        let actual = this.raiz;
        while(true){
            if( valor < actual.valor){
                if(!actual.izquierda){
                    actual.izquierda = nuevoNodo;
                    return;
                }
                actual = actual.izquierda;
            }
            else{
                if(!actual.derecha){
                    actual.derecha = nuevoNodo;
                    return;
                }
                actual = actual.derecha;
            }
        }


        }
         preorden(nodo: Node | null = this.raiz, resultado: number[] = []): number[] {
        if (!nodo) return resultado;
        resultado.push(nodo.valor);
        this.preorden(nodo.izquierda, resultado);
        this.preorden(nodo.derecha, resultado);
        return resultado;
    }

    inorden(nodo: Node | null = this.raiz, resultado: number[] = []): number[] {
        if (!nodo) return resultado;
        this.inorden(nodo.izquierda, resultado);
        resultado.push(nodo.valor);
        this.inorden(nodo.derecha, resultado);
        return resultado;
    }

    postorden(nodo: Node | null = this.raiz, resultado: number[] = []): number[] {
        if (!nodo) return resultado;
        this.postorden(nodo.izquierda, resultado);
        this.postorden(nodo.derecha, resultado);
        resultado.push(nodo.valor);
        return resultado;
    }

}