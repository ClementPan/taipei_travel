import { SpotItem, Category } from './../../core/interface/interface';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-spot-item',
  templateUrl: './spot-item.component.html',
  styleUrls: ['./spot-item.component.scss']
})
export class SpotItemComponent implements OnInit {
  @Output() likeToggle = new EventEmitter()
  @Input() item!: SpotItem
  @Input() liked!: boolean
  isFavorite: boolean = false
  tags: Category[] = []

  constructor() { }

  ngOnInit(): void {
    this.setOIsFavorite()
    this.setTags()
  }

  setOIsFavorite() {
    this.isFavorite = this.liked
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite
    this.likeToggle.emit({
      isFavorite: this.isFavorite,
      item: this.item
    })
  }

  setTags() {
    this.tags = [
      ...this.item.category,
      ...this.item.friendly,
      ...this.item.service,
      ...this.item.target,
    ]
    if (this.tags.length > 5) this.tags.length = 5
  }
}
