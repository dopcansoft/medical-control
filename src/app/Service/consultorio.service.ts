import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Consultorio } from '../models/consultorio';

@Injectable()
export class ConsultorioService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url=GLOBAL.url;
    }

    resgistrarConsultorio(consultorio : Consultorio): Observable<any>{
        //console.log(consultorio);
        //console.log(this.url);
         let params = JSON.stringify(consultorio);
         let headers = new HttpHeaders().set('Content-Type','application/json');
         return this._http.post(this.url+'agregar-consultorio', params, {headers:headers});
    }

	getConsultorios():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'consulta-consultorios', {headers: headers});
    }

    getOneConsultorio(id: number):Observable<any>{
        return this._http.get(`${this.url}consulta-consultorios/${id}`)
    }

    updateConsultorio(id: number, value: any) : Observable<Object>{
        return this._http.put(`${this.url}modificar-consultorio/${id}`, value);
    }

    deleteConsultorio(id: number): Observable<any> {
        return this._http.delete(`${this.url}eliminar-consultorio/${id}`, { responseType: 'text' });
      }
    
}
