import { GetAllResponse } from './../interface/interface';
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

  /**
   * get all attractions data
   * if page params doesn't exist, get add.
   * @param page
   * @returns
   */
  getAll(page: number = 1): Observable<GetAllResponse> {
    const allAttraction = page ? '/Attractions/All' + `?page=${page}` : '/Attractions/All'
    const url = this.baseUrl + '/' + 'zh-tw' + allAttraction

    return this.http.get<GetAllResponse>(url)
  }
}
