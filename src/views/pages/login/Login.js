import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../../services/auth.service";

import CIcon from '@coreui/icons-react';
import Register from "../../../views/pages/register/Register"
import {Link} from "react";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.Login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  
  render() {
    return (
      
  <div className="login_float">

    <div className="signin-section">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            
            <div className="register_title">
                <h2>Login</h2>
                <p>Sign in to your account</p>
            </div>

            
            <div className="form-group">
              {/* Username */}

              <div className="icon">
                <CIcon name="cil-user" className="icon_icon"/>
              </div>
              <Input
                type="text"
                className="login-input"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              {/* Password */}
              <div className="icon">
                <CIcon name="cil-lock-locked" className="icon_icon"/>
              </div>
              
              <Input
                type="password"
                className="login-input"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="login-contairner">
              
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}

              <div className="Login-item">
                <button
                className="Login-item_left"
                disabled={this.state.loading}
                >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
                </button>
              

              <div className="Login-item_right">
                <a href="">Forgot password? </a>
              </div>
              </div>
            </div>

            
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
    </div>

          <div className="SignUp">
            <div className="SignUp_container">
            <h2 className="SignUp_h2">Sign up</h2>
          <p className="SignUp_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit corrupti consequatur quam blanditiis vel ab numquam aperiam quod quas minima maiores, consectetur perspiciatis, laudantium dolorem doloribus provident quibusdam natus!</p>
          </div>
          <a href="" className="SignUp_a">Register Account!</a>
          </div>

          
  </div>

    );
  }
}