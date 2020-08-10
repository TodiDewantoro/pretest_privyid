import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import ImageWidget from './imagewidget';
import Faq from './faq';

class RouterMain extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <ImageWidget />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
          </Switch>
        </Router>
      </Fragment>  
    )
  }
}

export default RouterMain;