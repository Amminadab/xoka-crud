import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DepAddEditComponent } from '../dep-add-edit/dep-add-edit.component';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  displayedData: string[] = ['department'];

  dataSource = [];

  company: any;
  companyId: any;
  theHoleArray: any;

  constructor(
    private _dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private service: CompanyService,
    private _depService: DepartmentsService,
    private _http: HttpClient
  ) {}

  openAddEditDepForm() {
    const dialogRef = this._dialog.open(DepAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getDepartmentList();
        }
      },
    });
  }

  getDepartmentList() {
    this._depService.getDepartmentList().subscribe({
      next: (res) => {
        this.dataSource = res;
        // this.getCompanyList();
      },
      error: console.log,
    });
  }

  openEditDepForm(data: any) {
    const dialogRef = this._dialog.open(DepAddEditComponent, { data });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getDepartmentList();
        }
      },
    });
  }

  //fetching the what company is
  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.companyId);
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
    this.getDepartmentList();
  }
}
