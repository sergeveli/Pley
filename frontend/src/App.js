import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BusinessPage from './components/BusinessPage/BusinessPage.js'
import Home from './components/HomePage/home'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>
          <Route path='/home/:id/'>
            <BusinessPage />
          </Route> 

        </Switch>
      )}
    </>
  );
}

export default App;