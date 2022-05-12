import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent implements OnInit {

  informaticaList:any;
  constructor(private datosPortrfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortrfolio.obtenerDatos().subscribe(data =>{
      this.informaticaList=data.informatica;
    })
  }

}
