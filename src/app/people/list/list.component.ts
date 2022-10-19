import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPersonComponent } from '../add-person/add-person.component';
import { PeopleService } from '../services/people.service';

export interface Person {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Person[] = [];

  constructor(public dialog: MatDialog, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleSource().subscribe((people) => {
      this.dataSource = people;
    });
  }

  removePerson(personId: number) {
    this.peopleService.removePersonOfPeopleSOurce(personId);
  }

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

  columnsToDisplay: string[] = ['position', 'name', 'phone', 'actions'];
}
