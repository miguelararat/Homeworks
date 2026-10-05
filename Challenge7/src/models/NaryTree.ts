import { NodoMenu } from "./Node";

export class NaryTree {
    raiz: NodoMenu | null = null;

    // DFS (Depth-First Search) - recorre a fondo antes de pasar al siguiente hermano
    dfs(nodo: NodoMenu | null = this.raiz, resultado: string[] = []): string[] {
        if (!nodo) return resultado;
        resultado.push(nodo.titulo);
        for (let hijo of nodo.hijos) {
            this.dfs(hijo, resultado);
        }
        return resultado;
    }

    // BFS (Breadth-First Search) - recorre nivel por nivel
    bfs(): string[] {
        const resultado: string[] = [];
        if (!this.raiz) return resultado;

        const cola: NodoMenu[] = [this.raiz];
        while (cola.length > 0) {
            const actual = cola.shift()!;
            resultado.push(actual.titulo);
            cola.push(...actual.hijos);
        }
        return resultado;
    }
}