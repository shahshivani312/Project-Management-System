import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId= "shivani@gmail.com";
  password="12345";


  constructor(public router: Router) { }

  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
   
  });

  onSubmit() {
    
    if (this.Form.value.email == this.emailId && this.Form.value.password == this.password) {
      console.log("welcome");
      this.router.navigate(['admin/dashboard']);
    }else{
      console.log("wrong input");
    }
      }

  ngOnInit() {
  }

}
