import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JSONplaceholderService } from '../services/jsonplaceholder.service';
import { Signup } from '../signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  
register:FormGroup;
signup:Signup;
  msg: string;
  email: string;
  password: string;
 
  
  constructor(private formbuilder:FormBuilder,private router:Router,private service:JSONplaceholderService) { }

  ngOnInit(): void {
    this.register=this.formbuilder.group({
      userName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(16),Validators.minLength(8)]]

    })
  }
  submit(form:FormGroup):any{
    if(this.register.valid){
      this.service.signup(this.register).subscribe(data=>{
      console.log("sign",data);
        
      })
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
