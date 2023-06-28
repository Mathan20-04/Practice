import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input = {email: '', password: ''};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginClicked() {
    if (this.input.email == "root" && this.input.password == "pwd") {
      // go to the fileUpload page
      this.router.navigate(['search']);
    } else {
      // show error message
      alert("Wrong Credential");
    }
  }


}
