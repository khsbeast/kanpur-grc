import React from "react";
import "./App.css";
import Web from "./components/web";
import NoMatch from "./components/nomatch";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
/** Redux Provider */
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";

/**import firebase */
import firebase from "./fire";

/** Store */
import store from "./store";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Web} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
