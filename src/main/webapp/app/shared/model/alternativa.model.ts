export interface IAlternativa {
  id?: number;
  ordem?: number;
}

export class Alternativa implements IAlternativa {
  constructor(public id?: number, public ordem?: number) {}
}
