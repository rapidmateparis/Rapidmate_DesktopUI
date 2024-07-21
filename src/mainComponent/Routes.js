import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Main from './Main';

const Routes = () => {
  return (
    <>
    <Switch>
        <Route exact path='./Main' Component={Main} />
    </Switch>
    </>
  )
}

export default Routes;