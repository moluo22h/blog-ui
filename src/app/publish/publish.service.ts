import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublishService {

  constructor(private http: HttpClient) {
  }

  getFileContent(path: string): Observable<any> {
    return this.http.get('/publish' );
  }

}
