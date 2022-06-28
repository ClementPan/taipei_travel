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
    this.storageService.removeFavorite(item.id)
    this.favoriteList = this.favoriteList.filter((favItem: SpotItem) => favItem.id !== item.id)
  }
}
