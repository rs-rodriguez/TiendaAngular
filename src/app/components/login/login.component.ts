import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string
  loginForm: FormGroup
  email: string
  password: string
  returnUrl: string

  constructor(private router: Router, private route: ActivatedRoute, private auth: LoginService) { }

  ngOnInit() {
    this.email = ""
    this.password = ""
    this.loginForm = new FormGroup(
      {
        'email': new FormControl(),
        'password': new FormControl() 
      }
    )
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  checkLogin(){
    if(this.loginForm.value.email != null){
      let user = new User();
      user.username = this.loginForm.value.email;
      user.password = this.loginForm.value.password;
      this.auth.validateLogin(user).subscribe(result => {
        console.log('result is ', result);
        this.router.navigate(['/tienda']);
      }, error => {
        console.log('error is ', error);
      });
    }
  }

}
