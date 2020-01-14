import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitarPermisoComponent } from './solicitar-permiso/solicitar-permiso.component';
import { ListadoPermisoComponent } from './listado-permiso/listado-permiso.component';
import { APP_ROUTES } from './app.router';
import { PrincipalComponent } from './principal/principal.component';
import { Appservices } from './App.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SolicitarPermisoComponent,
    ListadoPermisoComponent,
    PrincipalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    HttpClientModule
    
  ],
  providers: [Appservices],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
