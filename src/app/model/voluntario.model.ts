import { Moment } from 'moment';
import { IDisponibilidade } from './disponibilidade.model';
import { IDoacao } from './doacao.model';
import { IParticipacao } from './participacao.model';
import { IEndereco } from './endereco.model';
import { ITelefone } from './telefone.model';
import { IEmail } from './email.model';
import { IRedeSocial } from './rede-social.model';
import { IHabilidade } from './habilidade.model';
import { IProfissao } from './profissao.model';


export const enum EstadoVoluntarioEnum {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  SUSPENSO = 'SUSPENSO'
}

export interface IVoluntario {
  id?: number;
  nome?: string;
  urlFotoPerfil?: string;
  cpf?: string;
  login?: string;
  senha?: string;
  isAdmin?: boolean;
  dataNascimento?: Moment;
  dataCadastro?: Moment;
  situacao?: EstadoVoluntarioEnum;
  disponibilidades?: IDisponibilidade[];
  doacaos?: IDoacao[];
  participacaos?: IParticipacao[];
  enderecos?: IEndereco[];
  telefones?: ITelefone[];
  emails?: IEmail[];
  redeSocials?: IRedeSocial[];
  habilidades?: IHabilidade[];
  profissaos?: IProfissao[];
}

export class Voluntario implements IVoluntario {
  constructor(
    public id?: number,
    public nome?: string,
    public urlFotoPerfil?: string,
    public cpf?: string,
    public login?: string,
    public senha?: string,
    public isAdmin?: boolean,
    public dataNascimento?: Moment,
    public dataCadastro?: Moment,
    public situacao?: EstadoVoluntarioEnum,
    public disponibilidades?: IDisponibilidade[],
    public doacaos?: IDoacao[],
    public participacaos?: IParticipacao[],
    public enderecos?: IEndereco[],
    public telefones?: ITelefone[],
    public emails?: IEmail[],
    public redeSocials?: IRedeSocial[],
    public habilidades?: IHabilidade[],
    public profissaos?: IProfissao[]
  ) {
    this.isAdmin = this.isAdmin || false;
  }
}
