import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { createRequestOption } from './request-util';
import { IFormaPagamento } from '../model/forma-pagamento.model';

type EntityResponseType = HttpResponse<IFormaPagamento>;
type EntityArrayResponseType = HttpResponse<IFormaPagamento[]>;

@Injectable({ providedIn: 'root' })
export class FormaPagamentoService {
  public resourceUrl = environment.URL_API + 'api/forma-pagamentos';

  constructor(protected http: HttpClient) {}

  create(formaPagamento: IFormaPagamento): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(formaPagamento);
    return this.http
      .post<IFormaPagamento>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(formaPagamento: IFormaPagamento): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(formaPagamento);
    return this.http
      .put<IFormaPagamento>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IFormaPagamento>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IFormaPagamento[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(formaPagamento: IFormaPagamento): IFormaPagamento {
    const copy: IFormaPagamento = Object.assign({}, formaPagamento, {
      descricao: formaPagamento.descricao != null && formaPagamento.descricao.isValid() ? formaPagamento.descricao.toJSON() : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.descricao = res.body.descricao != null ? moment(res.body.descricao) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((formaPagamento: IFormaPagamento) => {
        formaPagamento.descricao = formaPagamento.descricao != null ? moment(formaPagamento.descricao) : null;
      });
    }
    return res;
  }
}
