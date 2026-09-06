import { DoublyNode } from "./doubly-node";

export class DoublyLinkedList {
    head: DoublyNode | null;
    tail: DoublyNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value: any) {
        const nodo = new DoublyNode(value);

        if (!this.head) {
            this.head = nodo;
            this.tail = nodo;
            this.length++;
            return;
        }

        this.tail!.next = nodo;
        nodo.prev = this.tail;
        this.tail = nodo;
        this.length++;
    }

    peek(value: any) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    size() {
        return this.length;
    }

    remove(value: any) {
        if (!this.head) return null;

        let current: DoublyNode | null = this.head;

        while (current) {
            if (current.value === value) {

                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                }

                if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;
                }

                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;

                this.length--;
                return current;
            }
            current = current.next;
        }
        return null;
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    printReverse() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.prev;
        }
        console.log(result + 'null');
    }
}