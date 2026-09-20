import { Person } from "./Person";

export class Queue {
    items: Person[] = [];

    constructor() {
        this.items = [];
    }

    enqueue(persona: Person) {
        this.items.push(persona);
    }

    dequeue(){
        return this.items.length > 0 ? this.items.shift() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[0] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print(){
        this.items.forEach((persona) => {
            console.log(`Name: ${persona.name}, Withdrawal Amount: ${persona.withdrawalAmount}`);
        });
    }
}