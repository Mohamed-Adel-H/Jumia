import {NgModule} from '@angular/core';

import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


@NgModule({
  imports: [
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  exports: [
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {
}
