import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newUser = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    password: '',
    repassword: ''
}
  registration(form) {
    console.log(form);
    console.log(this.newUser);
  }
}
