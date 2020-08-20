import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONTENT_TYPE_VALUE, CONTENT_TYPE } from 'src/app/utils/constants';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Adding content type to the header if not exist
    if (!request.headers.has(CONTENT_TYPE)) {
      request = request.clone({
        setHeaders: {
          'Content-Type': CONTENT_TYPE_VALUE
        }
      });
    }

    return next.handle(request);
  }
}
