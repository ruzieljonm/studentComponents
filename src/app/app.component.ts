import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  studentsCollection;
  message = '';
print = false;

  studentRecord: {
    studNo: number,
    studFirstName: string,
    studLastName: string,
    studProgram: string,
    studYear: string
  };




private checkPatterns(value:any, pattern: RegExp):boolean{
  if(pattern.test(value))
    return true;
else
  return false;
}

add(record){
    this.studentRecord = record;
    const stringPattern = /^[A-z\s]+$/;
    const numberPattern = /^[0-9]+$/;
    const yearPattern = /^[1-5]+$/;
    if (this.checkPatterns(this.studentRecord.studNo, numberPattern) && 
      this.checkPatterns(this.studentRecord.studFirstName, stringPattern) &&
      this.checkPatterns(this.studentRecord.studLastName, stringPattern) && 
      this.checkPatterns(this.studentRecord.studProgram, stringPattern) &&
      this.checkPatterns(this.studentRecord.studYear, yearPattern)){
        this.studentsCollection.push(this.studentRecord);
        this.message = null;
        return true;

      }
      else {
        this.message = "ERROR!";
        return false;
      }
      
  }

printThis(){
    this.print = true;
    return this.print;
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





