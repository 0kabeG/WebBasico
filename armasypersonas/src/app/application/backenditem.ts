import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Guns } from '../domain/entities';


@Service()
export class Backenditem {

        private _http = inject(HttpClient);
    private _apiURL = "http://40.74.249.41/guns";

    
    getGunsFromAPI():Observable<Guns[]>{
        return this._http.get<Guns[]>(this._apiURL).pipe(timeout(1500))
    }


}
