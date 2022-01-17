import {Component} from "@angular/core";
@Component({
  selector:"classroom",
  templateUrl:"classroom.component.html"

})
export class ClassroomComponent {
  alowAddStudent: boolean = false;
  studentName: string = " ";
  notification: string = "No student was created!";
  created:boolean = false;
  sinhviens = [
    "Dinhvanlinh", "DinhVanlam", "nguyenminhquan"
  ];

  constructor() {//ham khoi tao thuc thi ngay tao thoi diem tao doi tuong
    setTimeout(() => {
      this.alowAddStudent = true;
    }, 2000);
  }

  onCreatedStudent() {
    if (this.studentName.length > 0) {
      this.sinhviens.push(this.studentName);


      this.notification = "Student"+ this.studentName +" was created";
      this.studentName="";
      this.created= true;
    }
  }
}
