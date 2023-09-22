import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {LoginserviceService } from "../services/loginservice.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username:any;
  password:any;
  error:any;

  constructor (
    private  _Logincomponent: LoginserviceService,
    private _router:Router
  ){
  }

  login(){


if( this.username == undefined ||this.username.trim().length === 0){
  console.log()
  this.error="user name required"
}else if (this.password == undefined || this.password.trim().length === 0)
{
  this.error = "password required"
}
else{
this.error=''
// console.log("login service call")
//       let res = this._Logincomponent.login(this.username,this.password);
// console.log(res)


    if((this.username != null && this.username !="") && (this.password != null && this.password !="")){
console.log("login service call")
      let res = this._Logincomponent.login(this.username,this.password);
console.log(res)
if (res ===200){

  this._router.navigate(["home"])
}else if (res === 403){
  window.alert("Invalid credentials")
}

// console.log(this.username)
// console.log(this.password)
    }  else if (  this.username == null || this.username ==""){
    window.alert("please enter a valid  user name")
    }
    else {
      window.alert("please enter a valid  password")
    }
  }
}

}
