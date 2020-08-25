import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalStorageService {

  userInfo: any;
  userId: any;
  password: any;
  loader = new BehaviorSubject(false);
  loader$ = this.loader.asObservable();

  constructor() { }

  showLoader(data) {
    this.loader.next(data);
  }

  clear() {
    this.userInfo = '';
    this.userId = '';
    this.password = '';
  }
}
