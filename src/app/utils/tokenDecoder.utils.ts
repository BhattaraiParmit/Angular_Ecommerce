import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';

@Injectable()
export class DecodeTokenUtil {
  static decodeToken(token: string) {
    try {
      var decode = jwt_decode(token);
      return decode;
    } catch (error) {
      return null;
    }
  }
}
