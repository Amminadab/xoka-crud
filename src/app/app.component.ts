import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompAddEditComponent } from './comp-add-edit/comp-add-edit.component';
import { CompanyService } from './services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
