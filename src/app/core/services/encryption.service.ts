import { Injectable } from '@angular/core';
import { PASSCODE_VALUE } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})

export class EncryptionService {

  //Static secure key for encrypt/decrypt the data
  private secureKey: string = "1234123412341234";

  /**
   *  constructor method used to inject the dependencies
   * */
  constructor() { }

  /**
   * Encrypt the actual data using secure keys
   * @param data Actual data for encryption
   */
  encrypt(data) {
    const plainText = data;
    const CryptLib = require("@skavinvarnan/cryptlib");
    const key = CryptLib.getHashSha256(PASSCODE_VALUE, 32); //32 bytes = 256 bits
    const cipherText = CryptLib.encrypt(plainText, key, this.secureKey);

    return cipherText;
  }

  /**
   * Decrypt the encrypted data to actual data using secure keys
   * @param encryptedData Encrypted data for decryption
   */
  decrypt(encryptedData) {

    const CryptLib = require("@skavinvarnan/cryptlib");
    const key = CryptLib.getHashSha256(PASSCODE_VALUE, 32); //32 bytes = 256 bits

    const decryptedString = CryptLib.decrypt(encryptedData, key, this.secureKey);
    return decryptedString
  }
}