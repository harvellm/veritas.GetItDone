import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {


    /**
     * Getter isAdmin
     * @return {boolean }
     */
	public get isAdmin(): boolean  {
		return this._isAdmin;
	}

    /**
     * Setter isAdmin
     * @param {boolean } value
     */
	public set isAdmin(value: boolean ) {
		this._isAdmin = value;
	}
  private _isAdmin:boolean = false;


  constructor() { }

}
