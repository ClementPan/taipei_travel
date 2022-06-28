import { SpotItem } from './../../core/interface/interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spot-item',
  templateUrl: './spot-item.component.html',
  styleUrls: ['./spot-item.component.scss']
})
export class SpotItemComponent implements OnInit {
  @Input() item!: SpotItem

  constructor() { }

  ngOnInit(): void { }

}
