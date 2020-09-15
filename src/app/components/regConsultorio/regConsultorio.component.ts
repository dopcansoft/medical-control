import {Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Consultorio } from '../../models/consultorio';
import { ConsultorioService } from '../../Service/consultorio.service'; 

@Component({
    selector : 'regConsultorio',
    templateUrl : './regConsultorio.component.html',
    providers: [ConsultorioService]
})

export class regConsultorioComponent implements OnInit{
    public title: string;
    public consultorio : Consultorio;
    public status : string;
    constructor(
        private _route : ActivatedRoute,
        private _router : Router,
        private _consultorioService : ConsultorioService
    ){
        this.title =  "REGISTRAR CONSULTORIOS"
        this.consultorio = new Consultorio(null,"","");

    }
    ngOnInit(){
        console.log('Cargando componente registrar Consultorio');
    }
    
	onSubmit(form){
        //console.log(this.consultorio);
        //this._consoltorioService.resgistrarConsultorio(this.consultorio);
        this._consultorioService.resgistrarConsultorio(this.consultorio).subscribe(
            response =>{
                if(response.consultorio && response.consultorio.idConsultorio){
                }
                console.log(response.consultorio);
                this.status = 'success';
                form.reset();
            },
            error => {
                console.log(<any>error);
                this.status = 'error';
            }
        );
	}
}
