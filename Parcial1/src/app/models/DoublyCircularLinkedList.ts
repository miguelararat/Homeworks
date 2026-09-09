import { DoublyNode } from "./DoublyNode";

export class DoublyCircularLinkedList {
    head: DoublyNode | null;
    tail: DoublyNode | null;
    current: DoublyNode | null = null;   
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;      
        this.length = 0;
    }

    getNext(): DoublyNode | null {
    if (this.current == null) return null;
    this.current = this.current.next;
    return this.current;
}

getPrev(): DoublyNode | null {
    if (this.current == null) return null;
    this.current = this.current.prev;
    return this.current;
}

    append(value: any) {
        const nodo = new DoublyNode(value);

        if (!this.head) {
            this.head = nodo;
            this.tail = nodo;
            this.tail.next = nodo;
            this.tail.prev = nodo;
            this.current = nodo;   
            this.length++;
            return;
        }

        this.tail!.next = nodo;
        nodo.prev = this.tail;
        this.tail = nodo;
        this.tail.next = this.head;
        this.head.prev = this.tail;
        this.length++;
    }

    peek(value: any) {
        if (!this.head) return null;

        let current: DoublyNode | null = this.head;
        let primeraIteracion = true;

        while (current && (primeraIteracion || current !== this.head)) {
            if (current.value === value) {
                return current;
            }
            primeraIteracion = false;
            current = current.next;
        }
        return null;
    }

    size() {
        return this.length;
    }
}