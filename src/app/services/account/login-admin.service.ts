import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class LoginAdminService {
  //estaLogueado = true;

  constructor(private angularFireAuth: AngularFireAuth) {}

  public loginWithEmail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  public getStatus() {
    return this.angularFireAuth.authState;
    // console.log(this.estaLogueado);
    // return this.estaLogueado ;
  }

  public logout() {
    return this.angularFireAuth.auth.signOut();
  }
}
