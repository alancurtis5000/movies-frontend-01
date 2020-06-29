import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import APage01 from './pages/APage01/APage01';
import APage02 from './pages/APage02/APage02';
import Landing from './pages/Landing/Landing';
import MovieDetails from './pages/MovieDetails/MovieDetails';

const AppRouter = () =>{
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieDetails}/>
        <Route path="/page1" component={APage01}/>
        <Route path="/page2" component={APage02}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/MovieDetails" component={MovieDetails}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter;