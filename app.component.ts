import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm!:FormGroup;
  submitted=false;
  title = 'registervalidation';
constructor(private formBuilder:FormBuilder){} 
ngOnInit(){
  this.registerForm =this.formBuilder.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  email: ['', Validators.compose([Validators.required, Validators.email])],
  password: ['', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(10)])]


  })
}
  onSubmit()
  {
this.submitted=true
if(this.registerForm.invalid)
{
  return;
}
  }
}