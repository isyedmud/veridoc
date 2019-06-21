/**
 * It saves user info globally and using this without re-calling api.
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private _userInfo = null;

  constructor() { }
}
