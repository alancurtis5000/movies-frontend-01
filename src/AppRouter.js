import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

import APage01 from './pages/APage01/APage01';
import APage02 from './pages/APage02/APage02';

const AppRouter = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={APage01}/>
        <Route path="/page2" component={APage02}/>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;