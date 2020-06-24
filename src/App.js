import React from "react";
import HomePage from "./pages/homePages/home-page.comp";
import Shop from "./pages/shopPages/shop.comp";
import SignInPage from "./pages/sign-inPage/sign-in.comp";
import Header from "./components/header/header.comp";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./app.scss";

class App extends React.Component {
  constructor() {
    // eslint-disable-next-line
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSignIn = null;

  componentDidMount() {
    this.unSignIn = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSignIn();
  }

  render() {
    return (
      <div className="app">
        <Header isSignIn={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
