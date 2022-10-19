import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  columnsToDisplay: string[] = ['position', 'name', 'phone'];
  dataSource = ELEMENT_DATA;
}
