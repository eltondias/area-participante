import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { createRequestOption } from './request-util';
import { IProfissaoNecessariaAcao } from '../model/profissao-necessaria-acao.model';
 
type EntityResponseType = HttpResponse<IProfissaoNecessariaAcao>;
type EntityArrayResponseType = HttpResponse<IProfissaoNecessariaAcao[]>;

@Injectable({ providedIn: 'root' })
export class ProfissaoNecessariaAcaoService {
  public resourceUrl = environment.URL_API + 'api/profissao-necessaria-acaos';

  constructor(protected http: HttpClient) {}

  create(profissaoNecessariaAcao: IProfissaoNecessariaAcao): Observable<EntityResponseType> {
    return this.http.post<IProfissaoNecessariaAcao>(this.resourceUrl, profissaoNecessariaAcao, { observe: 'response' });
  }

  update(profissaoNecessariaAcao: IProfissaoNecessariaAcao): Observable<EntityResponseType> {
    return this.http.put<IProfissaoNecessariaAcao>(this.resourceUrl, profissaoNecessariaAcao, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProfissaoNecessariaAcao>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProfissaoNecessariaAcao[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
