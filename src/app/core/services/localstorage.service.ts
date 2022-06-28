import { SpotItem } from './../interface/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  localStorageKey = 'fav-spots'
  store: SpotItem[] = []

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

  removeFavorite(itemId: number) {
    this.store = this.store.filter((item: SpotItem) => item.id !== itemId)
    this.setLocalStorage(this.store)
  }

  private setLocalStorage(data: SpotItem[] | []) {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem(this.localStorageKey, stringifiedData)
  }
}
