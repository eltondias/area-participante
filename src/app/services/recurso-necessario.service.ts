import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { createRequestOption } from './request-util';
import { IRecursoNecessario } from '../model/recurso-necessario.model';

type EntityResponseType = HttpResponse<IRecursoNecessario>;
type EntityArrayResponseType = HttpResponse<IRecursoNecessario[]>;

@Injectable({ providedIn: 'root' })
export class RecursoNecessarioService {
  public resourceUrl = environment.URL_API + 'api/recurso-necessarios';

  constructor(protected http: HttpClient) {}

  create(recursoNecessario: IRecursoNecessario): Observable<EntityResponseType> {
    return this.http.post<IRecursoNecessario>(this.resourceUrl, recursoNecessario, { observe: 'response' });
  }

  update(recursoNecessario: IRecursoNecessario): Observable<EntityResponseType> {
    return this.http.put<IRecursoNecessario>(this.resourceUrl, recursoNecessario, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IRecursoNecessario>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IRecursoNecessario[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
