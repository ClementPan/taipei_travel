import { GetAllResponse, GetAllCategory } from './../interface/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "/open-api";
  private lang = '/zh-tw'

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
    const allAttractions = page ? '/Attractions/All' + `?page=${page}` : '/Attractions/All'
    const url = this.baseUrl + this.lang + allAttractions

    return this.http.get<GetAllResponse>(url)
  }

  getCategory(): Observable<GetAllCategory> {
    const url = this.baseUrl + this.lang + '/Miscellaneous/Categories?type=Attractions'
    return this.http.get<GetAllCategory>(url)
  }

  getAllByCategory(catId: string): Observable<GetAllResponse> {
    const allAttractions = '/Attractions/All'
    const url = this.baseUrl + this.lang + allAttractions + `?categoryIds=${catId}`
    return this.http.get<GetAllResponse>(url)
  }
}
