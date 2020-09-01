import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {password} from '../my-validator.directive';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private  loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: [null, [Validators.required, Validators.pattern('^[\u4E00-\u9FA5A-Za-z0-9_]+$'), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: [null, [Validators.required, Validators.minLength(6)]],
        password2: [null, [Validators.required, Validators.minLength(6)]]
      }, {validator: password()})
    });
  }

  get userName() {
    return this.registerForm.get('userName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('passwordGroup').get('password');
  }

  get password2() {
    return this.registerForm.get('passwordGroup').get('password2');
  }

  get passwordGroup() {
    return this.registerForm.get('passwordGroup');
  }

  submit() {
    console.log(this.registerForm.value);
  }


  addUser(data) {
    this.loginService.addUser(data).subscribe((next) => {
      console.log('注册成功');
    });
  }

}
