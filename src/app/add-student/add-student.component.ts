import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'addStudent',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

@Output () add = new EventEmitter<any> ();
@Input () student;
studentCollection = [];
  constructor() { }
  ngOnInit() {}

onAdd(){
  this.studentCollection.push(this.student);
  }
getStudColl(){
  this.add.emit(this.studentCollection);
}

}
