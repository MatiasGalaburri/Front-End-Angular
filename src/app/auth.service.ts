import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url= 'http://localhost:8080/login';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient, private router:Router) {

    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))

   }

  IniciarSesion(credenciales:any):  Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data =>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }

  register(email:string, password:string, confirmPassword:string){
    this.http.put(this.url + 'authenticate' , {email: email, password: password, confirmPassword: password})
    .subscribe((resp:any) => {
      this.router.navigate(['/inicio']);
      localStorage.setItem('auth_token', resp.token);
    })
  }



}
