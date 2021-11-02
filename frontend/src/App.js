import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BusinessPage from './components/BusinessPage/BusinessPage.js'
import SplashPage from "./components/SplashPage";
import Home from './components/HomePage/home'

function App() {
  const user = useSelector(state => state.session.user);
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
          <PrivateRoute exact path='/home'>
            <Home user={user}/>
          </PrivateRoute>

          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>
          <Route path='/:businessId/'>
            <BusinessPage />
          </Route> 

          <Route path='/'>
            {user ?
            <Redirect to={{pathname: "/home"}}/> :
            <SplashPage />
            }
          </Route>
        </Switch>
      )}
    </>
  );
}

function PrivateRoute({ children, ...rest }) {
  const user = useSelector(state => state.session.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;