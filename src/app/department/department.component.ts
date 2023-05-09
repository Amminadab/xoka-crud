import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  company: any;
  companyId: any;
  theHoleArray: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CompanyService,
    private _http: HttpClient
  ) {}

  // getCompanyList() {
  //   this.service.getCompanyList().subscribe({
  //     next: (res) => {
  //       this.theHoleArray = res;
  //       // console.log(this.theHoleArray);
  //       // this.getCompanyList();
  //     },
  //     error: console.log,
  //   });
  // }
  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.router.routeReuseStrategy.shouldReuseRoute = () => true;
    this._http.get('http://localhost:3000/companies').subscribe({
      next: (res: any) => {
        this.theHoleArray = res;
        this.company = this.theHoleArray.find(
          (x: any) => x.id == this.companyId
        );
        // console.log(this.theHoleArray);
        // this.getCompanyList();
      },
      error: console.log,
    });
  }
}
