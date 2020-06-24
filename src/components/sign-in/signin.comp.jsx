import React, { Component } from "react";
import "./signin.style.scss";
import InputBox from "../input-box/input-box.comp";
import ButtonBox from "../button-box/button-box.comp";
import { signWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "anas@gmail.com",
      password: "hb072010",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>I have already have an account</h1>
        <h2>Sign in in your email and password</h2>
        <form>
          <InputBox
            onChange={this.handleChange}
            label="email"
            value={email}
            type="email"
            name="email"
            required
          />
          <InputBox
            onChange={this.handleChange}
            label="password"
            value={password}
            type="password"
            name="password"
          />

          <div className="btn-group">
            <ButtonBox type="submit" content="Sign In" stl="btn-dark" />
            <ButtonBox
              type="button"
              content="Sign In Width Google"
              stl="btn-primary"
              onclick={(e) => signWithGoogle()}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
