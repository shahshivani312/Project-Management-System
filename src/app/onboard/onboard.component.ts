import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Register = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    faname: new FormControl(''),
    maname: new FormControl(''),
    dob: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    pincode: new FormControl(''),
    gender: new FormControl('')
});


register(){
  console.log(this.Register);
  
}
}
