import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
@Output () sendOutput= new EventEmitter <any>();
@Input () studentList = [];
dataCollection = [];
printFlag = false;
printProceed;

getData(event){
this.dataCollection = event;
console.log(event);
}

printData(event){
this.printFlag = event;
console.log(event);
if(this.printFlag){
  if(this.dataCollection.length == 0)
	this.printProceed = false;
else
	this.printProceed = true;
}
}

// addStudentEntry():Boolean{
//   this.printing = false; 
//   const stringPattern = /^[A-z\s]+$/;
//   const studNumberPattern = /^[0-9]+$/;
//   const studYearPattern = /^[1-5]+$/;

//   if(this.checkPatterns(this.studNo, studNumberPattern) && 
//     this.checkPatterns(this.studFname, stringPattern) && 
//   this.checkPatterns(this.studLname, stringPattern) &&
//   this.checkPatterns(this.studProg, stringPattern) &&
//   this.checkPatterns(this.studYr, studYearPattern)){
    
//     this.studentRecord = {
//       studNumber: this.studNo,
//       studFirstName: this.studFname,
//       studLastName: this.studLname,
//       studProgram: this.studProg,
//       studYear: this.studYr
//         };

//         this.studentCollection.push(this.studentRecord);
//         this.messages = null;
//         this.clearValues();
//   }else{
//     this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
//     return false;
//   }

// }

// listStudents(): void{
//   this.printing = true;
//   console.log('Showing stored Students');
// }

// clearValues(): void{
//   this.studNo = null;
//   this.studFname = null;
//   this.studLname = null;
//   this.studProg = null;
//   this.studYr = null;
// }

  
}





