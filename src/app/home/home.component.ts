import { ApiService } from './../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { GetAllResponse, SpotItem, CategoryData } from '../core/interface/interface';

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
  category!: CategoryData
  categorySelected: string[] = []

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAll(this.currentPage)
    this.getType()
  }

  getAll(pageNum: number): void {
    this.apiService.getAll(pageNum).subscribe((res: GetAllResponse) => {
      const { total, data } = res
      this.setTotalData(total, data, data.length)
    })
  }

  setTotalData(total: number, data: SpotItem[], length: number) {
    this.dataCount = total
    this.spotData = data
    this.currentPageCount = length
  }

  getNextData(): void {
    this.currentPage += 1
    if (!this.categorySelected.length) {
      this.getAll(this.currentPage)
    } else {
      const query = this.getCategoryQueryString()
      this.getAllByCatId(query, this.currentPage)
    }
  }

  getLastData(): void {
    this.currentPage -= 1
    if (!this.categorySelected.length) {
      this.getAll(this.currentPage)
    } else {
      const query = this.getCategoryQueryString()
      this.getAllByCatId(query, this.currentPage)
    }
  }

  /**
   * get all attraction types
   */
  getType() {
    this.apiService.getCategory().subscribe(res => {
      const { data } = res
      this.category = data
    })
  }

  selectHandler(event: any) {
    this.currentPage = 1
    const target = event.target
    const query = this.setSelectedCategory(target)
    this.getAllByCatId(query)
  }

  getAllByCatId(query: string, page?: number) {
    this.apiService.getAllByCategory(query, page).subscribe(res => {
      const { total, data } = res
      this.setTotalData(total, data, data.length)
    })
  }

  setSelectedCategory(target: any): string {
    const { id, value } = target
    if (id === 'category') this.categorySelected[0] = value
    if (id === 'friendly') this.categorySelected[1] = value
    if (id === 'services') this.categorySelected[2] = value
    if (id === 'target') this.categorySelected[3] = value
    return this.getCategoryQueryString()
  }

  getCategoryQueryString() {
    return this.categorySelected.filter(Boolean).join()
  }
}
