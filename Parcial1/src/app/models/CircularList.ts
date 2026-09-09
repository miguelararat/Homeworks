import { Node } from "./Node";

export class CircularList{
    head: Node | null;
    tail: Node | null;
    current: Node | null;     
    length: number;

    constructor(){
        this.head = null;
        this.tail= null;
        this.current = null;  
        this.length = 0;
    }

    getNext(): Node | null { //Método para facilitar saber que médico va a seguir
    if (this.current === null) return null;      

    this.current = this.current.next;         
    return this.current;                 
    }

    append(value: any){
        const nodo = new Node(value);
        if(this.head == null){
            this.head = nodo;
            this.tail = nodo;
            this.head.next = this.tail;
            this.current = nodo;    
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
        if (!this.head) return null;   

        let current: Node | null = this.head;
        let primeraVez = true;

        while (current && (primeraVez || current !== this.head)) {
            if (current.nombre === value) {
                return current;
            }
            primeraVez = false;
            current = current.next;
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