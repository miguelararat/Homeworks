export class Node{
    value: string | null;
    children: { [key: string]: Node };
    isEndOfWord: boolean;
     popularity: number;
    constructor(value: string | null){
        this.value = value;
        this.children = {};
        this.isEndOfWord = false;
        this.popularity = 0;
    }
}