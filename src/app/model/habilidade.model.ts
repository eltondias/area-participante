import { IVoluntario } from './voluntario.model';

export interface IHabilidade {
  id?: number;
  nome?: string;
  descricao?: string;
  voluntarios?: IVoluntario[];
}

export class Habilidade implements IHabilidade {
  constructor(public id?: number, public nome?: string, public descricao?: string, public voluntarios?: IVoluntario[]) {}
}
