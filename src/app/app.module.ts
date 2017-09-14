import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { EntryComponent } from './entry/entry.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PrintStudentComponent } from './print-student/print-student.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddStudentComponent,
    PrintStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
