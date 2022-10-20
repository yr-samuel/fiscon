import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { PeopleModule } from '../people.module';

interface Person {
  name: string;
  phone: string;
  id?: number;
}

@Injectable()
export class PeopleService {
  constructor(private apiService: ApiService) {
    this.apiService
      .get<Person[]>('/people')
      .subscribe((people) => this.peopleSource.next(people));
  }

  private peopleSource = new BehaviorSubject<Person[]>([]);

  getPeopleSource() {
    return this.peopleSource.asObservable();
  }

  addPersonToPeopleSource(person: Person) {
    const lastPerson = this.peopleSource.value.at(-1);

    const newPerson = {
      ...person,
      id: lastPerson?.id ? lastPerson.id + 1 : 0,
    };

    this.apiService.post<Person>('/people', newPerson).subscribe((person) => {
      const peopleSourceValues = this.peopleSource.value;
      this.peopleSource.next([...peopleSourceValues, person]);
    });
  }

  removePersonOfPeopleSOurce(personId: number) {
    this.apiService.delete(`/people/${personId}`).subscribe(() => {
      const peopleSourceValues = this.peopleSource.value;
      const peopleSourceWithoutThisPerson = peopleSourceValues.filter(
        (person) => person.id !== personId
      );
      this.peopleSource.next(peopleSourceWithoutThisPerson);
    });
  }

  filterPeopleSource(value: string) {
    this.apiService
      .get<Person[]>(`/people${!!value ? '?name_like=' + value : ''}`)
      .pipe(tap((value) => console.log(value)))
      .subscribe((people) => {
        this.peopleSource.next(people);
      });
  }
}
