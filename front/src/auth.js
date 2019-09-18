// sguzmanm: Why are you importing React?
import React from "react";

// sguzmanm: Why are you using a singleton right here? Wouldn`t it be better to use localStorage or React State instead?
// Because you are giving a single point of failure to your app`s authentication
class Auth{
  constructor(){
    this.authenticated=false;
  }
  login(cb){
    this.authenticated=true;
    cb();
  }
  logout(cb){
    this.authenticated=false;
    cb();
  }

  isAuthenticated(){
    return this.authenticated;
  }
}
export default new Auth()
