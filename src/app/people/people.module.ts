import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PeopleRoutingModule } from './people-routing.module';
import { MatTableModule } from '@angular/material/table';
import { PeopleComponent } from './people.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [PeopleComponent, ListComponent],
  imports: [CommonModule, PeopleRoutingModule, MatTableModule, MatButtonModule],
})
export class PeopleModule {}
