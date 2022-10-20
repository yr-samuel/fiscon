import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  dataSource: any;
  constructor(public dialog: MatDialog, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleSource().subscribe((people) => {
      this.dataSource = new MatTableDataSource(people);
      this.dataSource.sort = this.sort;
    });
  }

  @ViewChild(MatSort) sort: MatSort;

  removePerson(personId: number) {
    this.peopleService.removePersonOfPeopleSOurce(personId);
  }

  searchPeople(event: any) {
    const { value } = event.target;
    this.peopleService.filterPeopleSource(value);
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
  }

  columnsToDisplay: string[] = ['id', 'name', 'phone', 'actions'];
}
