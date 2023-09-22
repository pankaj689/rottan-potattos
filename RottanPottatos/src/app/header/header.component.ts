import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ LoginserviceService} from "../services/loginservice.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor (
    private  _Logincomponent: LoginserviceService,
    private _router:Router
  ){
  }

  gotohome(){
    this._router.navigate(["home"])
  }
  logout(){
   // this._Logincomponent.logout(this.username)
   this._router.navigate(["login"])

  }

}
