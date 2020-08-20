import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalStorageService } from '../services/global-storage.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { AUTH_TYPE } from '../../utils/constants';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private globalStorageService: GlobalStorageService,
    private router: Router,
    private storageService: LocalStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Appends above headers with the http url
    return next.handle(request).pipe(map((event: any) => {

      if (event instanceof HttpResponse) {

        if (event['body'] && event['body'].message) {

          //checking for authentication type value -20
          if (event['body'].message[0].Type == AUTH_TYPE) {

            //clears global storage
            this.globalStorageService.clear();

            //clears local storage
            this.storageService.clearLocalStorage();

            //Navigate to login page
            this.router.navigate(['/login']);

            //it will prevent api call from further execution
            return false;
          }
        }
      }
      return event;
    }));
  }
}
