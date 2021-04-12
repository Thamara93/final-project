import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    username: '',
    password: '' 
  }

  logIn(form) {
    console.log(form)
    console.log(form.value)
    console.log(form.valid)
    if (this.user.username === 'tamar.gavashelishvili@gmail.com') {
      console.log('hello')
    }
  }
}
