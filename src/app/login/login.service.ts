import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  getDatas(): Observable<any> {
    return this.http.get('http://localhost:9000/user/me');
  }

  addUser(data): Observable<any> {
    return this.http.post('/user', data);
  }

}
