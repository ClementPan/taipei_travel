import { SpotItem } from './../core/interface/interface';
import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../core/services/localstorage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteList: any = []
  isMultipleDeleting = false

  constructor(
    private storageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.getFavoriteSpotItem()
  }

  getFavoriteSpotItem() {
    this.favoriteList = this.storageService.getAllfavorites()
  }

  /**
   * handler event when app-spot-item emit toggle
   * @param spotItemState
   */
  likeToggle(spotItemState: { item: SpotItem, isFavorite: boolean }): void {
    const { item } = spotItemState
    this.storageService.removeFavorite([item.id])
    // remove one item
    this.favoriteList = this.favoriteList.filter((favItem: SpotItem) => favItem.id !== item.id)
  }

  showDeleteBtn(): void {
    this.isMultipleDeleting = true
  }

  restoreMultipleDeleteState(): void {
    this.isMultipleDeleting = false
  }

  /**
   * 1. get all checked input from document
   * 2. remove selected ids from localstorage
   * 3. remove selected ids from view
   * 4.
   */
  deleteMultiple(): void {
    const selectedItems: number[] = []
    const inputs = document.querySelectorAll('.select-delete-input')
    inputs.forEach((input: any) => {
      if (input.checked) {
        selectedItems.push(+input.id)
      }
    })
    this.storageService.removeFavorite(selectedItems)
    // remove multiple items
    this.favoriteList = this.favoriteList.filter((favItem: SpotItem) => !selectedItems.includes(favItem.id))
    this.restoreMultipleDeleteState()
  }
}
