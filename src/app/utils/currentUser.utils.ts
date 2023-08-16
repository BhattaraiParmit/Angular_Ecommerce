import { LoginModel } from '../model';
import { DecodeTokenUtil } from './tokenDecoder.utils';
export class CurrentUser {
  static getCurrentUser() {
    let currentUser: any;
    try {
      currentUser = DecodeTokenUtil.decodeToken(
        localStorage.getItem('access_token') as string
      );
      if (!currentUser) {
        return null;
      }
      return currentUser;
    } catch (error) {
      currentUser = new LoginModel();
      return currentUser;
    }
  }

  static setCurrentUser(token: string) {
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', token);
  }
}
