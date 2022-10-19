import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPersonComponent } from '../add-person/add-person.component';

export interface Person {
  name: string;
  phone: string;
}

const ELEMENT_DATA: Person[] = [
  {
    name: 'Samuel',
    phone: '15996874936',
  },
  {
    name: 'Vitor',
    phone: '15996874935',
  },
  {
    name: 'Pablo',
    phone: '15996874934',
  },
  {
    name: 'Gustavo',
    phone: '15996874933',
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddPersonDialog() {
    const dialogRef = this.dialog.open(AddPersonComponent, {
      width: '500px',
      data: {
        name: '',
        phone: '',
      },
      autoFocus: false,
      panelClass: 'dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('close');
    });
  }

  columnsToDisplay: string[] = ['position', 'name', 'phone'];
  dataSource = ELEMENT_DATA;
}
