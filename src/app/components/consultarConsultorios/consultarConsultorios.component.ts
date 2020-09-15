import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Consultorio } from '../../models/consultorio';
import { ConsultorioService } from '../../Service/consultorio.service'; 

@Component({
    selector: 'consultaConsultorios',
    templateUrl: './consultarConsultorios.component.html',
    providers: [ConsultorioService]
})

export class consultarConsultorios implements OnInit{
    public title: string;
    //public consultorios: Consultorio[];
    public status: string;
    public consultorios: Observable<Consultorio[]>;
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _consultorioService: ConsultorioService
    ){
        
        this.title =  "CONSULTAR CONSULTORIOS"
        //this.consultorio = new Consultorio(null,"","");

    }

    ngOnInit(){
        console.log('Componente Consultar Consultorios Cargado');
        this.obtenerLista();
    }

    obtenerLista() {
        this.consultorios = this._consultorioService.getConsultorios();
    }
    borrarConsultorio(id: number){
        this._consultorioService.deleteConsultorio(id).subscribe(
          data => {
            console.log(data);
            this. obtenerLista();
          },
          error => console.log(error));

    }

    actualizarConsultorio(id: number){
        this._router.navigate(['actualizar_consultorio', id]);
    }

}

