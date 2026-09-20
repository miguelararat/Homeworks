export class libro{
    titulo: string;
    autor : string;
    anoPublicacion : number;

    constructor(titulo : string, autor: string, anoPublicacion : number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacion = anoPublicacion ;
    }
}