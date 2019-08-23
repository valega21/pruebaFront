import { Injectable } from '@angular/core';

@Injectable()
export class ListasService {
    
  private elementos : elemento []= [
      {
        estatus: "Activo",
        nombre: "Regreso a clases",
        publicidad: "/assets/img/guitarra.jpg",
        pagina: "Landing",
        fecha:"11/08/19-12:00"
      },
      {
        estatus: "Vencido",
        nombre: "Hotsale",
        publicidad: "/assets/img/guitarra.jpg",
        pagina: "Landing",
        fecha:"10/09/19-12:00"
      },
      {
        estatus: "1 día: 30 min",
        nombre: "Celulares y Tecnología",
        publicidad: "/assets/img/guitarra.jpg",
        pagina: "Categoría",
        fecha: "08/09/19-12:00"
      },
      {
        estatus: "Activo",
        nombre: "Samsung",
        publicidad: "/assets/img/guitarra.jpg",
        pagina: "Producto",
        fecha:"08/11/19-12:00"
      },
      {
        estatus: "Activo",
        nombre: "PrimaveraVerano",
        publicidad: "/assets/img/guitarra.jpg",
        pagina: "Corner",
        fecha: "07/11/19-12:00"
      }
    ];


  constructor()
  {
    console.log("Servicio Listo para Usarse.");
  }

  getElementos()
  {
    return this.elementos;
  }

}

  export interface elemento
  {
      estatus: string;
      nombre: string;
      publicidad:string;
      pagina:string;
      fecha: string;
  }
  