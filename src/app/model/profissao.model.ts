import { IProfissaoNecessariaAcao } from './profissao-necessaria-acao.model';
import { IVoluntario } from './voluntario.model';

export interface IProfissao {
  id?: number;
  nome?: string;
  descricao?: string;
  profissaoNecessariaAcaos?: IProfissaoNecessariaAcao[];
  voluntarios?: IVoluntario[];
}

export class Profissao implements IProfissao {
  constructor(
    public id?: number,
    public nome?: string,
    public descricao?: string,
    public profissaoNecessariaAcaos?: IProfissaoNecessariaAcao[],
    public voluntarios?: IVoluntario[]
  ) {}
}
