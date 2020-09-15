import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Consultorio } from '../../models/consultorio';
import { ConsultorioService } from '../../Service/consultorio.service';

@Component({
    selector : "modifica",
    templateUrl: "./modificaConsultorio.component.html",
    providers: [ConsultorioService]

})

export class modificaConsultorio implements OnInit{
    public title: string;
    public id: number;
    public _consultorio: Consultorio;
    public status: string;

    constructor(
        private _route : ActivatedRoute ,
        private _router : Router,
        private _consultorioService : ConsultorioService

    ){

    }

    ngOnInit(){

          this._consultorio = new Consultorio(null,'','');
      
          this.id = this._route.snapshot.params['id'];
          
          this._consultorioService.getOneConsultorio(this.id)
            .subscribe(data => {
              console.log(data)
              this._consultorio = data;
            }, error => console.log(error));
    }

    updateConsultorio() {
        this._consultorioService.updateConsultorio(this.id, this._consultorio)
          .subscribe(data => {
            console.log(data);
            //this._consultorio = new Consultorio();
            this.gotoList();
            this.status = 'success';
            
          }, error =>{ 
              console.log(error);
              this.status = 'error'
        });
      }
    
      onSubmit(form) {
        this.updateConsultorio();
        form.reset();    
      }
    
      gotoList() {
        this._router.navigate(['/consultar_consultorio']);
      }

}