import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {password} from '../my-validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.pattern('^[\u4E00-\u9FA5A-Za-z0-9_]+$'), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  getDatas() {
    this.loginService.getDatas().subscribe((response) => {
      console.log(response);
    });
  }

}
