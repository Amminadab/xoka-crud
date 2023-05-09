import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dep-add-edit',
  templateUrl: './dep-add-edit.component.html',
  styleUrls: ['./dep-add-edit.component.scss'],
})
export class DepAddEditComponent implements OnInit {
  depForm: FormGroup;

  cId: any;

  constructor(
    private _fb: FormBuilder,
    private _depService: DepartmentsService,
    private _dialogRef: MatDialogRef<DepAddEditComponent>,
    private _dialog: MatDialog,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.depForm = this._fb.group({
      department: '',
    });
  }
  ngOnInit(): void {
    this.cId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.cId);
  }

  onFormSubmit() {
    if (this.depForm.valid) {
      if (this.data) {
        this._depService
          .updateDepartment(this.data.id, this.depForm.value, this.cId)
          .subscribe({
            next: (val: any) => {
              alert('Department Updated successfully');
              this._dialogRef.close(true);
            },
            error: (error: any) => {
              console.error(error);
            },
          });
      } else {
        this._depService.addDepartment(this.depForm.value, this.cId).subscribe({
          next: (val: any) => {
            alert('Department Added successfully');
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.error(error);
          },
        });
      }
    }
  }
}
