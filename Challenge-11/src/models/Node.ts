export type NodeType = 'person' | 'city';

export interface GraphNode {
  id: string;
  type: NodeType;
  name: string;
}

export class NodoPersona implements GraphNode {
  readonly type: NodeType = 'person';

  constructor(
    public id: string,
    public name: string,
    public age: number
  ) {}
}

export class NodoCity implements GraphNode {
  readonly type: NodeType = 'city';

  constructor(
    public id: string,
    public name: string
  ) {}
}