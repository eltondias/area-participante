import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from './request-util';
import { IProfissao } from '../model/profissao.model';

type EntityResponseType = HttpResponse<IProfissao>;
type EntityArrayResponseType = HttpResponse<IProfissao[]>;

@Injectable({ providedIn: 'root' })
export class ProfissaoService {
  public resourceUrl = environment.URL_API + 'api/profissaos';

  constructor(protected http: HttpClient) {}

  create(profissao: IProfissao): Observable<EntityResponseType> {
    return this.http.post<IProfissao>(this.resourceUrl, profissao, { observe: 'response' });
  }

  update(profissao: IProfissao): Observable<EntityResponseType> {
    return this.http.put<IProfissao>(this.resourceUrl, profissao, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProfissao>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProfissao[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
