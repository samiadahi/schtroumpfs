import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Schtroumpf} from './schtroumpf.model';

@Injectable()
export class SchtroumpfService {
  selectedSchtroumpf: Schtroumpf;
  schtroumpfs: Schtroumpf[];
  readonly baseURL = 'http://localhost:3000/Schtroumpfs';

  constructor(private http: HttpClient) { }

  postSchtroumpf(emp: Schtroumpf) {
    return this.http.post(this.baseURL, emp);
  }

  getSchtroumpfList() {
    return this.http.get(this.baseURL);
  }

  putSchtroumpf(emp: Schtroumpf) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteSchtroumpf(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
