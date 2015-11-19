var React = require("react");
var ReactDOM = require("react-dom");
var App_tsx_1 = require("./components/site/src/App.tsx");
var Home_tsx_1 = require("./components/home/src/Home.tsx");
var OpentableCaseStudy_tsx_1 = require("./components/opentable-casestudy/src/OpentableCaseStudy.tsx");
var react_router_1 = require("react-router");
var createBrowserHistory = require('history/lib/createBrowserHistory');
ReactDOM.render((React.createElement(react_router_1.Router, {"history": createBrowserHistory()}, React.createElement(react_router_1.Route, {"path": "/", "component": App_tsx_1.default}, React.createElement(react_router_1.IndexRoute, {"component": Home_tsx_1.default}), React.createElement(react_router_1.Route, {"path": "case-studies"}, React.createElement(react_router_1.Route, {"path": "opentable", "component": OpentableCaseStudy_tsx_1.default}))))), document.getElementById('root'));
