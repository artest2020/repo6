import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IFrases } from 'app/shared/model/frases.model';

type EntityResponseType = HttpResponse<IFrases>;
type EntityArrayResponseType = HttpResponse<IFrases[]>;

@Injectable({ providedIn: 'root' })
export class FrasesService {
  public resourceUrl = SERVER_API_URL + 'api/frases';

  constructor(protected http: HttpClient) {}

  create(frases: IFrases): Observable<EntityResponseType> {
    return this.http.post<IFrases>(this.resourceUrl, frases, { observe: 'response' });
  }

  update(frases: IFrases): Observable<EntityResponseType> {
    return this.http.put<IFrases>(this.resourceUrl, frases, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IFrases>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IFrases[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
