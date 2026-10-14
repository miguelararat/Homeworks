import {Nodo} from './Nodo';

export class NaryTree {
    root: Nodo ;
    constructor(root: Nodo) {
        this.root = root;
    }

    dfs(node: Nodo  = this.root, result: Nodo[] = []): Nodo[] {
        if (node === null) return result;
        result.push(node);
        for (const child of node.children) {
            this.dfs(child, result);
        }
        return result;
    }

    bfs(): Nodo[] {
        const result: Nodo[] = [];
        const queue: Nodo[] = [this.root];
        while (queue.length > 0) {
            const node = queue.shift()!;
            if (node) {
                result.push(node);
                queue.push(...node.children);
            }
        }
        return result;
    }

    find(id: string): Nodo | null{
        return this.dfs().find(node => node.id === id) || null;
    }

    addNode(child: Nodo, parentId: string | null): void {
        const node = this.find(parentId || '');
        if(!node){
            throw new Error(`No se encontró un nodo con el id ${parentId}`);
        }
        node.addChild(child);
    }

    removeNode(id: string): void {
        const node = this.find(id);
        if (!node || !node.padreId) {
            return;
        }
        const parent = this.find(node.padreId)
        if(parent){
            parent.children = parent.children.filter((c) => c.id !== id)
        }
    }

}