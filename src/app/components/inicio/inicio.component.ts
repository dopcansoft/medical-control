import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    selector: 'InicioComponent',
    templateUrl: './inicio.component.html'
})

export class inicioComponent implements OnInit{
    public title : string;

    constructor (
        private _route : ActivatedRoute,
        private _router : Router
        ){
        this.title = "INICIO"
    }
    ngOnInit(){
        console.log('Componente inicio cargado');
    }



}
