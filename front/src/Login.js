import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./Login.css";
import auth from "./auth.js"
const Login = props => {
  return (
    <div class="text-center">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form className="formLogin">
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn
              onClick={()=>{
                  // sguzmanm: Why are you doing logins without verifying auth?
                  auth.login(()=>{
                    props.history.push("/");
                  });
                }}
              >Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default Login;
