import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { LoaderService } from './loader.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(
    private loaderSrv: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('[[[ HttpsInterceptor-req: ', request);
    this.loaderSrv.onHttpRequest.next(true)

    return next.handle(request).pipe(
      tap(() => this.loaderSrv.onHttpRequest.next(false)),
      catchError((error: HttpErrorResponse) => {
        alert(error)
        this.loaderSrv.onHttpRequest.next(false)
        return throwError(error)
      }),
    )
  }
}
