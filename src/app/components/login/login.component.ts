import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

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
      this.router.navigate(['/tienda']);
    }
  }

}
