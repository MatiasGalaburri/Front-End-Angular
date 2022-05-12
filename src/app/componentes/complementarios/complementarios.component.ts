import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-complementarios',
  templateUrl: './complementarios.component.html',
  styleUrls: ['./complementarios.component.css']
})
export class ComplementariosComponent implements OnInit {

  complementarios:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.complementarios=data.complementarios;
    })
  }

}
