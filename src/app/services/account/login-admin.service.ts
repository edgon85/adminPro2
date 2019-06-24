import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  estaLogueado = true;

  constructor() { }


  public getStatus() {
    console.log(this.estaLogueado);
    return this.estaLogueado ;
   }
}
