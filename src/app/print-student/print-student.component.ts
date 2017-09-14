import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'printStudent',
  templateUrl: './print-student.component.html',
  styleUrls: ['./print-student.component.css']
})
export class PrintStudentComponent implements OnInit {

 @Output () printData = new EventEmitter<any>();
@Input () studentCollection = [];
student;
  constructor() { }

  ngOnInit() {
  }
  onPrint(){
  
    this.printData.emit(this.studentCollection);
  }
 printStudents(){
    this.studentCollection.push(this.student);
  }

}
