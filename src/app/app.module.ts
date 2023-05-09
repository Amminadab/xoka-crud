import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CompAddEditComponent } from './comp-add-edit/comp-add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { NewCompaniesComponent } from './new-companies/new-companies.component';
import { DepAddEditComponent } from './dep-add-edit/dep-add-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
// import { CompaniesComponent } from './companies/companies.component';

const appRoute: Routes = [
  { path: '', component: NewCompaniesComponent },
  { path: 'department/:id', component: DepartmentComponent },
  { path: 'department/:id/employee', component: EmployeeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CompAddEditComponent,
    DepartmentComponent,
    NewCompaniesComponent,
    DepAddEditComponent,
    EmployeeComponent,
    EmpAddEditComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
