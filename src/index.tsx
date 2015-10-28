import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/src/App.tsx";
import Home from "./components/home/src/Home.tsx";
import OpentableCaseStudy from "./components/opentable-casestudy/src/OpentableCaseStudy.tsx";
import {Router, Route, IndexRoute} from "react-router";

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="case-studies">
        <Route path="opentable" component={OpentableCaseStudy}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
