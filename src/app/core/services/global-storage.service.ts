import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalStorageService {

  userInfo: any;
  userId: any;
  password: any;

  constructor() { }

  clear() {
    this.userInfo = '';
    this.userId = '';
    this.password = '';
  }
}
