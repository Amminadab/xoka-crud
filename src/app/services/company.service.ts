import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private _http: HttpClient) {}

  addCompany(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/companies', data);
  }
  updateCompany(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/companies/${id}`, data);
  }
  getCompanyList(): Observable<any> {
    return this._http.get('http://localhost:3000/companies');
  }
}
