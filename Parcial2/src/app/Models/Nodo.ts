export class Nodo{
    id: string;
    value: string;
    tipo: 'carpeta' | 'archivo';
    creadoPor: string;
    padreId: string | null;
    children: Nodo[] = [];

    constructor(id: string, value: string, tipo: 'carpeta' | 'archivo', creadoPor: string, padreId: string | null){
        this.id = id;
        this.value = value;
        this.tipo = tipo;
        this.creadoPor = creadoPor;
        this.padreId = padreId;
    }

    isLeaf (): boolean {
        return this.children.length === 0;
    }

    addChild(child: Nodo): void {
        if (this.tipo === 'archivo') {
            throw new Error("No se puede agregar un hijo a un nodo de tipo 'archivo'.");
        }
        child.padreId = this.id;
        this.children.push(child);
    }
}