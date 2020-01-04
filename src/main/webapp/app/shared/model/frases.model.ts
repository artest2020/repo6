import { TipoVF } from 'app/shared/model/enumerations/tipo-vf.model';

export interface IFrases {
  id?: number;
  descricao?: string;
  verdadeira?: TipoVF;
}

export class Frases implements IFrases {
  constructor(public id?: number, public descricao?: string, public verdadeira?: TipoVF) {}
}
