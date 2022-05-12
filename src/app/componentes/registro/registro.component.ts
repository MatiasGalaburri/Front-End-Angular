import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email = "";
  password = "";
  confirmPassword = "";
  passwordError!: boolean;

  form: FormGroup;

  constructor(private authService: AuthService, private router:Router, private formBuilder:FormBuilder) {

    this.form= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmPassword:['',[Validators.required, Validators.minLength(8)]]

    })
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.email, this.password, this.confirmPassword )
  }

  volverInicio(){
    this.router.navigate([''])
  }

get Email() {
  return this.form.get("email");
}

get Password() {
  return this.form.get("password");
}

get ConfirmPassword() {
  return this.form.get("confirm-password");
}



}
