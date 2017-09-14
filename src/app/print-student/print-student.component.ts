import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'printStudent',
  templateUrl: './print-student.component.html',
  styleUrls: ['./print-student.component.css']
})
export class PrintStudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printing = false;
  listStudents(): void{
  this.printing = true;
  console.log('Showing stored Students');
}

}
