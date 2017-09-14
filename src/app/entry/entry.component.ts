import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Output ('data-added') sendData = new EventEmitter<any>();
student;
studNo: string;
studFname: string;
studLname: string;
studProg: string;
studYr: number;

constructor(){}
getStudent() {

  this.student= {
    studNumber: this.studNo,
    studFirstName: this.studFname,
    studLastName: this.studLname,
    studProgram: this.studProg,
    studYear: this.studYr
  };

  this.sendData.emit(this.student);
  }
  
clearValues(): void{
  this.studNo = null;
  this.studFname = null;
  this.studLname = null;
  this.studProg = null;
  this.studYr = null;
  }
addClicked(event){
this.sendData.emit(true);
}
ngOnInit() {}
}
