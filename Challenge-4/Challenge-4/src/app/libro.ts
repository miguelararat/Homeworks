export class libro{
    titulo: string;
    autor : string;
    editorial : string;
    ISBN : string;

    constructor(titulo : string, autor: string, editorial: string, ISBN: string){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial ;
        this.ISBN = ISBN ;
    }
}