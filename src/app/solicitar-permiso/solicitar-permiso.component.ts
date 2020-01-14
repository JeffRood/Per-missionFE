import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appservices } from '../App.services';
@Component({
  selector: 'app-solicitar-permiso',
  templateUrl: './solicitar-permiso.component.html',
  styleUrls: ['./solicitar-permiso.component.css']
})
export class SolicitarPermisoComponent implements OnInit {
  PermisoForm: FormGroup;
  constructor(private fb: FormBuilder, public servicio: Appservices) { }

  ngOnInit() {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.PermisoForm = this.fb.group({
      Nombre: [null, Validators.required], 
      Apellido: [null, Validators.required],
      TipoPermiso: [null, Validators.required]
    });

}

Continuar() {
  this.servicio.Crear_Permiso(this.PermisoForm.value).subscribe()
}
}