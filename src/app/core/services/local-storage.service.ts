import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor(private encryptService: EncryptionService) { }

  setLocalStorage(key, val) {
    localStorage.setItem(key, this.encryptService.encrypt(JSON.stringify(val)));
  }

  getLocalStorage(key) {
    let val = localStorage.getItem(key);
    if (val) {
      return this.encryptService.decrypt(val);
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
