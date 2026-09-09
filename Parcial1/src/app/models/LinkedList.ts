import { Node } from "./Node";

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
            this.length ++;

        }
        else{
        this.tail!.next = nodo;
        this.tail = nodo;
        this.length ++;
        }
        

    }

    peek(value: any){
    let current = this.head;
        while(current){
            if(current.nombre === value){
                 return current;
            }
            current = current!.next;
        }
        return null;

    }

    size(){
        return this.length;
    }

    remove(value: any){
        if(!this.head){
            return null;
        }
        if(value === this.head.nombre){
            this.head = this.head.next;

            if(this.head === null){
                this.tail = null;
            }
        this.length --;
        return;
        }
        let current = this.head;
        while(current.next && current.next.nombre !== value){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next;
            if(!current.next){
                this.tail = current;
                
            }
            this.length --;
        }
        return null;

    }
    print(){
    let current = this.head;
    let result = '';
    while(current){
        
        result += current.nombre + ' -> ' + '';
        current = current.next;
    }
    console.log(result + 'null');
    }
}