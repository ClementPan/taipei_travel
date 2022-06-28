import { LocalstorageService } from './../../core/services/localstorage.service';
import { SpotItem, Category } from './../../core/interface/interface';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-spot-item',
  templateUrl: './spot-item.component.html',
  styleUrls: ['./spot-item.component.scss']
})
export class SpotItemComponent implements OnInit {
  @Output() likeToggle = new EventEmitter()
  @Output() onEdit = new EventEmitter()
  @Input() item!: SpotItem
  @Input() liked!: boolean
  @Input() editable: boolean = false
  form!: FormGroup;
  isFavorite: boolean = false
  tags: Category[] = []
  isEditing = false

  constructor(
    private storageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.setIsFavorite()
    this.setTags()
    this.initForm()
  }

  setIsFavorite() {
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

  editStateToggle() {
    this.isEditing = !this.isEditing
    if (this.isEditing === true) {
      this.onEdit.emit(this.item.id)
    }
  }

  saveEditedContent() {
    if (this.form.valid) {
      const item = {
        ...this.item,
        ...this.form.value
      }
      this.storageService.patchFavorite(item)
      alert('儲存編輯成功')
    } else {
      alert('儲存編輯失敗')
    }
    this.editStateToggle()
    // inform parent
    this.onEdit.emit(false)
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(this.item.name, [
        Validators.required,
        Validators.maxLength(20)
      ]),
      address: new FormControl(this.item.address, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      tel: new FormControl(this.item.tel, [
        Validators.required,
        Validators.maxLength(20)
      ]),
      open_time: new FormControl(this.item.open_time, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      introduction: new FormControl(this.item.introduction, [
        Validators.required,
        Validators.maxLength(500)
      ]),
    })
  }
}
