import {Component} from "@angular/core";
import {NgForm} from "@angular/forms"
@Component({
  selector:"app-register",
  templateUrl:"./register.component.html"
})
export class RegisterComponent{
  onSubmit(form:NgForm){
    console.log(form.value);

}


}
