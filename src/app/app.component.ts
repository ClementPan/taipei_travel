import { throttle } from 'rxjs/operators';
import { LoaderService } from './core/services/loader.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoader: boolean = true

  constructor(
    private router: Router,
    private loaderSrv: LoaderService
  ) { }

  ngOnInit(): void {
    this.subscriptToLoaderSrv()
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url)
  }

  subscriptToLoaderSrv() {
    this.loaderSrv.checkLoaderState().pipe(
      throttle(() => interval(1000))
    ).subscribe((state: boolean) => {
      this.showLoader = state
    })
  }
}
