import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   
  
  loginForm: FormGroup;
  submitted: boolean = false;

  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })  
    
}

get f(){
  return this.loginForm.controls;
}

signIn() {  
  this.authenticationService.SignIn(this.f.userName.value, this.f.password.value);
  console.log(this.authenticationService.userData);
  if(this.authenticationService.userData){
    this.router.navigateByUrl('/dashboard');
  }else{
    this.email = ''; 
    this.password = '';
  }
  
}

signOut() {
  this.authenticationService.SignOut();
}


}
