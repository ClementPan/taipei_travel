import { ApiService } from './../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiData = ''

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.apiService.getAll().pipe(
      map(d => d.data)
    ).subscribe(r => {
      console.log('[[[ getAll: ', r);
      this.apiData = JSON.stringify(r)
    })
  }
}
