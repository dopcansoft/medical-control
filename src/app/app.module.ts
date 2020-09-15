import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http'; en las versiones anteriores.
import { HttpClientModule } from '@angular/common/http'
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { inicioComponent } from './components/inicio/inicio.component';
import { regConsultorioComponent } from './components/regConsultorio/regConsultorio.component';
import { consultarConsultorios } from './components/consultarConsultorios/consultarConsultorios.component';
import { modificaConsultorio } from './components/modificarConsultorio/modificaConsultorio.component';

@NgModule({
  declarations: [
    AppComponent,
    inicioComponent,
    regConsultorioComponent,
    consultarConsultorios,
    modificaConsultorio
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
