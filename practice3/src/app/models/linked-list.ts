import { Node } from "./node";

export class LinkedList{
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }

    append(value: any){
        const nodo = new Node(value);
        if(this.head == null){
            this.head = nodo;
            this.tail = nodo;
            nodo.next = nodo;
            this.length ++;


        }
        else{
        this.tail!.next = nodo;
        this.tail = nodo;
        this.tail.next = this.head;
        this.length ++;
        }
       

    }

    peek(value: any){
    let current = this.head;
        while(current){
            if(current.value === value){
                 return current;
            }
            current = current!.next;
        }
        return null;

    }

    size(){
        return this.length;
    }

    
}