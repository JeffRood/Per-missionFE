import {Routes , RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SolicitarPermisoComponent } from './solicitar-permiso/solicitar-permiso.component';
import { ListadoPermisoComponent } from './listado-permiso/listado-permiso.component';



const appRoutes: Routes = [
  { path: "", component: AppComponent},
  { path: "solicitar", component: SolicitarPermisoComponent},
  { path: "listado", component: ListadoPermisoComponent}
 
];


export const APP_ROUTES =  RouterModule.forRoot(appRoutes, { useHash: true});
