import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    private _resumeUrl = 'resume.json';

    constructor(private _http: Http) {
    }

    getAllData() : Observable <any[]> {
        return    this._http.get(this._resumeUrl)
                            .map((res: Response) => <any[]> res.json())
                            .catch(this.handleError);
    }


    getData(mod : string) : Observable <any[]> {
        return this.getAllData()
                    .map(res => res[mod]);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
