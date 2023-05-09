import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private _http: HttpClient) {}

  addDepartment(data: any, companyId: any): Observable<any> {
    return this._http.post('http://localhost:3000/departments', {
      ...data,
      companyId: companyId,
    });
  }
  updateDepartment(id: number, data: any, companyId: any): Observable<any> {
    return this._http.put(`http://localhost:3000/departments/${id}`, {
      ...data,
      companyId: companyId,
    });
  }
  getDepartmentList(): Observable<any> {
    return this._http.get('http://localhost:3000/departments');
  }
}
