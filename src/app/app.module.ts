import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InformaticaComponent } from './componentes/informatica/informatica.component';
import { DesarrolloWebComponent } from './componentes/desarrollo-web/desarrollo-web.component';
import { ComplementariosComponent } from './componentes/complementarios/complementarios.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IntroComponent,
    FormacionComponent,
    ExperienciaComponent,
    InformaticaComponent,
    DesarrolloWebComponent,
    ComplementariosComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
