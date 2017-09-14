import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'printStudent',
  templateUrl: './print-student.component.html',
  styleUrls: ['./print-student.component.css']
})
export class PrintStudentComponent implements OnInit {

@Input() studentCollection: Array<object> = [];
  @Input() printing: boolean;

  listStudents(): void{
    this.printing = true;
    console.log('Showing stored students');
  }
  constructor() { }

  ngOnInit() {
  }

}
