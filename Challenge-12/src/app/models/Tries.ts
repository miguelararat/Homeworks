import { Node } from "./Node";
import { MinHeap } from "./Heap";

  export interface Product {
    name: string;
    popularity: number;
}

export class Trie{
    root: Node;
    constructor()
    {
        this.root = new Node(null);
    }

    insert(word: string, popularity: number): void {
        let current = this.root;

        for (const character of word) {
            if (current.children[character] === undefined) {
                current.children[character] = new Node(character);
            }
            current = current.children[character];
        }

        current.isEndOfWord = true;
        current.popularity = popularity;
    }

    search(word: string){
        let current = this.root;
        for(let character of word){
        if(current.children[character] === undefined){
            return false;
        } 
        current = current.children[character];
        }
        return current.isEndOfWord;
    }

  

    private findNode(prefix: string): Node | null {
        let current = this.root;
        for (const character of prefix) {
            if (current.children[character] === undefined) {
                return null;
            }
            current = current.children[character];
        }
        return current;
    }

    private collect(node: Node, currentWord: string, results: Product[]): void {
        if (node.isEndOfWord) {
            results.push({ name: currentWord, popularity: node.popularity });
        }
        for (const character in node.children) {
            this.collect(node.children[character], currentWord + character, results);
        }
    }

    searchByPrefix(prefix: string): Product[] {
        const node = this.findNode(prefix);
        if (node === null) return [];

        const results: Product[] = [];
        this.collect(node, prefix, results);
        return results;
    }

    searchTopK(prefix: string, k: number): Product[] {
    const candidates = this.searchByPrefix(prefix);
    const heap = new MinHeap();

    for (const product of candidates) {
        heap.push(product);

        if (heap.size() > k) {
            heap.pop();
        }
    }

    // El heap queda con los K más populares, pero en orden de min-heap.
    // Salen de menor a mayor y se invierten.
    const result: Product[] = [];
    while (heap.size() > 0) {
        result.push(heap.pop()!);
    }

    return result.reverse();
}
}