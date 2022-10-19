import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeopleModule } from '../people.module';

interface Person {
  name: string;
  phone: string;
  id?: number;
}

@Injectable()
export class PeopleService {
  constructor() {}

  private peopleSource = new BehaviorSubject<Person[]>([
    {
      id: 1,
      name: 'Samuel',
      phone: '15996874936',
    },
    {
      id: 2,
      name: 'Vitor',
      phone: '15996874935',
    },
    {
      id: 3,
      name: 'Pablo',
      phone: '15996874934',
    },
    {
      id: 4,
      name: 'Gustavo',
      phone: '15996874933',
    },
  ]);

  getPeopleSource() {
    return this.peopleSource.asObservable();
  }

  addPersonToPeopleSource(person: Person) {
    const peopleSourceValues = this.peopleSource.value;
    this.peopleSource.next([
      ...peopleSourceValues,
      { ...person, id: new Date().getTime() },
    ]);
  }

  removePersonOfPeopleSOurce(personId: number) {
    const peopleSourceValues = this.peopleSource.value;
    const peopleSourceWithoutThisPerson = peopleSourceValues.filter(
      (person) => person.id !== personId
    );
    this.peopleSource.next(peopleSourceWithoutThisPerson);
  }
}
