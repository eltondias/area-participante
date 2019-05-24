import { IVoluntario } from './voluntario.model';

export interface ITelefone {
  id?: number;
  ddd?: string;
  numero?: string;
  voluntario?: IVoluntario;
}

export class Telefone implements ITelefone {
  constructor(public id?: number, public ddd?: string, public numero?: string, public voluntario?: IVoluntario) {}
}
