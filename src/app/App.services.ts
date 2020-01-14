import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Appservices {

      APIURL = { 
    
       Listado : 'https://localhost:44341/api/Permiso/api/Listado',
    
       Listado_Tipo_Permisos: 'https://localhost:44341/api/Permiso/api/ListadoTipoPermisos',
    Crear_Permiso :'https://localhost:44341/api/Permiso/api/Create_Permiso',
    Delete: 'https://localhost:44341/api/Permiso/api/Delete_Permiso'
    
    }
 
  constructor( private http: HttpClient ) { }


  Cargar_Listado_Permisos(): Observable<any> {
   return this.http.get(this.APIURL.Listado)
  }
  Cargar_Listado_Tipo_Permiso(): Observable<any> {
    return this.http.get(this.APIURL.Listado_Tipo_Permisos)
  }

  Crear_Permiso(param): Observable<any> {
    return this.http.post(this.APIURL.Crear_Permiso, param)
      
}

Eliminar_Permiso(numero): Observable<any> {
    return this.http.post(this.APIURL.Delete, numero)
      
}

  // get_Papeleria(){
  //   return this.http.get(this.urlJson);
  // }
}
