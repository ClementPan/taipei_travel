import { SpotItem } from './../interface/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  localStorageKey = 'fav-spots'
  private store: SpotItem[] = []

  constructor() { }

  getAllfavorites(): SpotItem[] | [] {
    const store = localStorage.getItem(this.localStorageKey)
    if (!store) {
      this.setLocalStorage([])
    } else {
      this.store = JSON.parse(store)
    }
    return this.store
  }

  addFavorite(spotItem: SpotItem): void {
    this.store.push(spotItem)
    this.setLocalStorage(this.store)
  }

  removeFavorite(itemIds: number[]): void {
    this.store = this.store.filter((item: SpotItem) => !itemIds.includes(item.id))
    this.setLocalStorage(this.store)
  }

  patchFavorite(item: SpotItem): void {
    this.store = this.store.map(favItem => favItem.id === item.id ? item : favItem)
    this.setLocalStorage(this.store)
  }

  private setLocalStorage(data: SpotItem[] | []): void {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem(this.localStorageKey, stringifiedData)
  }
}
