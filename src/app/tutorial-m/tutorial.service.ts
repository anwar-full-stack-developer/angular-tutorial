import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from './tutorial.model';

const baseUrl = 'http://localhost:8000/api/tutorials';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/read-tutorial/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-tutorial`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update-tutorial/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-tutorial/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}//find-by-title/${title}`);
  }

}
