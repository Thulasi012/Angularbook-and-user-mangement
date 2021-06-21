import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  
register:FormGroup;
  msg: string;
  email: string;
  password: string;
  
  constructor(private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.register=this.formbuilder.group({
      userName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(16),Validators.minLength(8)]]

    })
  }
  submit(form:FormGroup){
    if(this.register.valid){
      sessionStorage.setItem('email',this.register.value.email)
      sessionStorage.setItem('password',this.register.value.password)


      this.msg="signup Successful"
      this.router.navigate(['/login']);
    }
    else{
      this.msg="Try again later"
    }
  }
}
