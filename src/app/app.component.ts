import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 studentRecord: {}
  studentCollection: Array<object> = [];
  printing = false;
  setStudentInfo(event): void{
    this.studentRecord = event;
    this.studentCollection.push(this.studentRecord);
  }
  setPrinting(event): void{
    this.printing = event;
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





