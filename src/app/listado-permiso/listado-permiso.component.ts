import { Component, OnInit } from '@angular/core';
import { Permiso } from '../Models/Permiso';
import { Appservices } from '../App.services';

@Component({
  selector: 'app-listado-permiso',
  templateUrl: './listado-permiso.component.html',
  styleUrls: ['./listado-permiso.component.css']
})
export class ListadoPermisoComponent implements OnInit {
Lista_Permisos: Permiso[] = []
  constructor(public servicio: Appservices ) { }

  ngOnInit() {
    debugger;
    this.Cargar_Lista();
  }

  Cargar_Lista() {
   this.servicio.Cargar_Listado_Permisos().subscribe(x => {
   this.Lista_Permisos = x as Permiso[];
   });
  }

  
}
