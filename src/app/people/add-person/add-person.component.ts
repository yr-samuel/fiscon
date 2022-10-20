import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeopleService } from '../services/people.service';
import { Person } from '../list/list.component';

export interface DialogData {
  phone: string;
  name: string;
}

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {}

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^0-9]+$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  closeAddPerson() {
    this.dialogRef.close();
  }

  addPerson() {
    const personInfo = this.formGroup.value as Person;

    if (!this.formGroup.valid) return;
    this.peopleService.addPersonToPeopleSource(personInfo);

    this.dialogRef.close();
  }
}
