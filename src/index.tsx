import * as React from "react";
import * as ReactDOM from "react-dom";
import Site from "./components/site/src/App.tsx";
import Home from "./components/home/src/Home.tsx";
import OpentableCaseStudy from "./components/opentable-casestudy/src/OpentableCaseStudy.tsx";
import {Router, Route, IndexRoute} from "react-router";
const createBrowserHistory:any = require('history/lib/createBrowserHistory')

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Site}>
      <IndexRoute component={Home}/>
      <Route path="case-studies">
        <Route path="opentable" component={OpentableCaseStudy}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
