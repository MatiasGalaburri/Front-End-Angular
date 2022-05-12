import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router:Router, private authService:AuthService , private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group(
      {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      })
   }

  ngOnInit(): void {

  }

  onEnviar(event: Event) {
    event.preventDefault;
    this.authService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.router.navigate(['/portfolio']);
    })
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  volverInicio(){
    this.router.navigate([''])
  }

  // Codigo para Validar formulario

  get Password() {
    return this.form.get("password");
  }

  get Email() {
    return this.form.get("email");
  }


}
