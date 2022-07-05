import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  onHttpRequest = new Subject<boolean>()

  constructor() { }

  /**
   * get loader state
   * @returns
   */
  checkLoaderState(): Subject<boolean> {
    return this.onHttpRequest
  }
}
