import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  // @Output() AddClicked = new EventEmitter<any>();
  // @Input() message;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  students;

  getStudent(): object{
    this.students = {
      studNo: this.studNo,
      studFname: this.studFname,
      studLname: this.studLname,
      studProg: this.studProg,
      studYr: this.studYr
    };
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
    return this.students;
  }

  
  flag;
  
  // onAdd(){
  //   //this.flag = 'add';
  //   this.AddClicked.emit({mode: this.flag});
  // }
  constructor() { }

  ngOnInit() {
  }

}
