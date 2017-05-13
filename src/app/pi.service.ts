import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PiService {

  constructor(private http: Http) {}

  getOutlets():Observable<any> {
    return this.http.get('api/outlets')
      .map((res:Response) => res.json() || {});
  }

  putOutlet(outlet, state):Observable<any> {
    return this.http.put('api/outlets/' + outlet + '/' + state, JSON.stringify({}))
      .map((res:Response) => res.json() || {});
  }


}
