import { ApiService } from './../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { GetAllResponse, SpotItem } from '../core/interface/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataCount = 0
  spotData: SpotItem[] = []
  currentPage = 1
  currentPageCount = 0

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAll(this.currentPage)
  }

  getAll(pageNum: number): void {
    this.apiService.getAll(pageNum).subscribe((res: GetAllResponse) => {
      const { total, data } = res
      this.dataCount = total
      this.spotData = data
      this.currentPageCount = data.length
      console.log('[[[ data: ', data);
    })
  }

  getNextData(): void {
    this.currentPage += 1
    this.getAll(this.currentPage)
  }

  getLastData(): void {
    this.currentPage -= 1
    this.getAll(this.currentPage)
  }
}
