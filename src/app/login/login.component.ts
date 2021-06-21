import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm }   from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  semail: any;
  spassword: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    this.semail=form.value.email;
    this.spassword=form.value.password;
    this.getvalidateuser()

  }
  getvalidateuser(){
    if(sessionStorage.getItem('email')==this.semail&&sessionStorage.getItem('password')==this.spassword){
      this.router.navigate(['/user']);
}
else{
  alert("give valid credential");
}
  }
}
