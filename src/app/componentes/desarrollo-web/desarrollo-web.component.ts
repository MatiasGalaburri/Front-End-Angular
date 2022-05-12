import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-desarrollo-web',
  templateUrl: './desarrollo-web.component.html',
  styleUrls: ['./desarrollo-web.component.css']
})
export class DesarrolloWebComponent implements OnInit {

  desarrolloWebFrontList:any;
  desarrolloWebBackList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.desarrolloWebFrontList=data.desarrolloWebFront;
      this.desarrolloWebBackList=data.desarrolloWebBack;
    })
  }

}
