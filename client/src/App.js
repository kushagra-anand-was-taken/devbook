import React, { Fragment, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./action/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
