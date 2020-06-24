import React, { Component } from "react";
import "./signup.style.scss";
import InputBox from "../input-box/input-box.comp";
import ButtonBox from "../button-box/button-box.comp";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) return;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, displayName);
    } catch (e) {
      console.log(e);
    }
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1>I not have any account</h1>
        <h2>Sign up your information </h2>
        <form onSubmit={this.handleSubmit}>
          <InputBox
            onChange={this.handleChange}
            label="displayName"
            value={displayName}
            type="displayName"
            name="displayName"
            required
          />
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
            required
          />
          <InputBox
            onChange={this.handleChange}
            label="confirmPassword"
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            required
          />
          <ButtonBox type="submit" content="Sign up" stl="btn-dark" />
        </form>
      </div>
    );
  }
}

export default SignUp;
