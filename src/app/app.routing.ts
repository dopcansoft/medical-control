import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Componentes
import { regConsultorioComponent } from './components/regConsultorio/regConsultorio.component';
import { inicioComponent } from './components/inicio/inicio.component';
import { consultarConsultorios } from './components/consultarConsultorios/consultarConsultorios.component';
import { modificaConsultorio } from './components/modificarConsultorio/modificaConsultorio.component';

const appRoutes : Routes=[
    {path: '', component:inicioComponent },
    {path: 'inicio', component:inicioComponent },
    {path: 'registrar_consultorio', component:regConsultorioComponent },
    {path: 'consultar_consultorio', component:consultarConsultorios },
    {path: 'actualizar_consultorio/:id', component:modificaConsultorio }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<object> = RouterModule.forRoot(appRoutes); 