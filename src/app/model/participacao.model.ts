import { Moment } from 'moment';
import { IVoluntario } from './voluntario.model';
import { IAcao } from './acao.model';

export interface IParticipacao {
  id?: number;
  dataHoraEmissaoCertificado?: Moment;
  cargaHoraria?: number;
  voluntario?: IVoluntario;
  acao?: IAcao;
}

export class Participacao implements IParticipacao {
  constructor(
    public id?: number,
    public dataHoraEmissaoCertificado?: Moment,
    public cargaHoraria?: number,
    public voluntario?: IVoluntario,
    public acao?: IAcao
  ) {}
}
