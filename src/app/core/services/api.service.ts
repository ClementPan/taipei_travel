import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "/open-api";

  constructor(
    private http: HttpClient
  ) { }

  getAll(lang: string = 'zh-tw'): Observable<any> {
    const allAttraction = '/Attractions/All'
    const url = this.baseUrl + '/' + lang + allAttraction
    return this.http.get(url)
  }
}
