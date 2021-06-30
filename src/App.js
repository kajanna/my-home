import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./shered/UIElements/theme";
import CircularProgress from '@material-ui/core/CircularProgress';

import NavBar from "./shered/navigation/NavBar";
import Footer from "./shered/footer/Footer";
import UserHouses from "./house/pages/UserHouses";
import Auth from "./auth/pages/Auth";
import { authSuccess, logout } from './store/index';
import "./App.css";
import { auth } from "./firebaseConfig";

const App = () => {

  const dispatch = useDispatch();

  const NewHouse = React.lazy(() => import('./house/pages/NewHouse'));
  const EditHouse = React.lazy(() => import('./house/pages/EditHouse'));
  const HouseDetailsInfo = React.lazy(() => import('./house/pages/HouseDetailsInfo'));

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(authSuccess(user.uid))
      } else {
        dispatch(logout())
      }
    })    
},[dispatch]);

  const isAuth = useSelector((state) => state.auth.isAuth);

  let routes;
  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/" exact><UserHouses /></Route>
        <Route path="/new" exact component={NewHouse}/>
        <Route path="/:userId/edit/:houseId" exact component={EditHouse} />
        <Route path="/:userId/houses/:houseId" exact component={HouseDetailsInfo} />
        <Redirect to="/" />
      </Switch>
    
    );
    
  } else {
    routes = (
      <Switch>
        <Route path="/" exact><Auth /></Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>
        <Suspense fallback={<CircularProgress color="secondary"/>}>
        {routes}
        </Suspense>
        </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
