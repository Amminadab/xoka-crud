import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comp-add-edit',
  templateUrl: './comp-add-edit.component.html',
  styleUrls: ['./comp-add-edit.component.scss'],
})
export class CompAddEditComponent implements OnInit {
  compForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _compService: CompanyService,
    private _dialogRef: MatDialogRef<CompAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.compForm = this._fb.group({
      companyName: '',
      location: '',
      phoneNumber: '',
      companyTrademark: '',
    });
  }

  ngOnInit(): void {
    this.compForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.compForm.valid) {
      this._compService.addCompany(this.compForm.value).subscribe({
        next: (val: any) => {
          alert('Company Added successfully');
          this._dialogRef.close(true);
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    }
  }
}
