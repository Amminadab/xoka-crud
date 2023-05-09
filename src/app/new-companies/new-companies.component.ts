import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { CompAddEditComponent } from '../comp-add-edit/comp-add-edit.component';

@Component({
  selector: 'app-new-companies',
  templateUrl: './new-companies.component.html',
  styleUrls: ['./new-companies.component.scss'],
})
export class NewCompaniesComponent implements OnInit {
  displayedData: string[] = [
    'id',
    'companyName',
    'companyTrademark',
    'location',
    'phoneNumber',
  ];

  dataSource = [];

  constructor(
    private _dialog: MatDialog,
    private _compService: CompanyService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getCompanyList();
  }

  openAddEditCompForm() {
    const dialogRef = this._dialog.open(CompAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCompanyList();
        }
      },
    });
  }

  getCompanyList() {
    this._compService.getCompanyList().subscribe({
      next: (res) => {
        this.dataSource = res;
        // this.getCompanyList();
      },
      error: console.log,
    });
  }
  openEditCompForm(data: any) {
    const dialogRef = this._dialog.open(CompAddEditComponent, { data });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCompanyList();
        }
      },
    });
  }

  scrollAndRefresh(id: number) {
    // this.props.history.push(`/department/${id}`)
    this._router.navigateByUrl(`/department/${id}`);
  }
}
