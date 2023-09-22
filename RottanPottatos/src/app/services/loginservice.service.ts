import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  login(username:string,password:string){

    if(username === "pankaj" && password==='1234'){

      return 200;
    }else{
      return 403;
    }

  }

  logout(username:string){
    if(username === "pankaj"){
      return 200
    }
    else{

      return 403
    }

  }
}
