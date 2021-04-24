import React, {Suspense, useState} from 'react';
import {Switch,Route, BrowserRouter, Link} from 'react-router-dom';
import NavBar from "./views/NavBar/NavBar";
import ContentsPage from "./views/ContentsPage/ContentsPage";
import LandingPage from "./views/LandingPage/LandingPage";
import Footer from "./views/Footer/Footer";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MainPage from "./views/MainPage/MainPage";

function App() {

  return (
      <BrowserRouter>
          <Suspense fallback={(<div>Please wait..</div>)}>
              <NavBar></NavBar>
              <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    <Route path="/contents" component={ContentsPage}></Route>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route exact path="/main" component={MainPage}></Route>
                    <Route exact path="/login" component={LoginPage}></Route>
                    <Route exact path="/register" component={RegisterPage}></Route>
                </Switch>
              </div>
              <Footer></Footer>
          </Suspense>
      </BrowserRouter>
  );
}

export default App;
