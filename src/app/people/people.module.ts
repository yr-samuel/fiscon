import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { PeopleRoutingModule } from './people-routing.module';
import { MatTableModule } from '@angular/material/table';
import { PeopleComponent } from './people.component';
import { ListComponent } from './list/list.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [PeopleComponent, ListComponent, AddPersonComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class PeopleModule {}
