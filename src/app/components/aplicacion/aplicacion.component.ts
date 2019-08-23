import { Component, OnInit } from '@angular/core';
import { ListasService, elemento } from '../../services/listas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {

  elementos: elemento [] = [];

  constructor( private _listasService: ListasService,
               private route: Router ) {

   }

  ngOnInit() {
    this.elementos = this._listasService.getElementos();
    console.log(this.elementos);
  }

}
