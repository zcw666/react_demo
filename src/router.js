import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Me from "./pages/me";
import Find from "./pages/find";
import Book from "./pages/book";
import Dynamic from "./pages/dynamic";

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/dynamic" component={Dynamic} />
                <Route path="/find" component={Find} />
                <Route path="/book" exact component={Book} />
                <Route path="/me" component={Me} />
                <Route path="/login" component={Login} />
                <div className="tabbar">
                    <Link to="/home">首页</Link>
                    <Link to="/dynamic/">动态</Link>
                    <Link to="/find/">发现</Link>
                    <Link to="/book/">小册</Link>
                    <Link to="/me/">我</Link>
                </div>
            </Router>
        );
    }
}
export default MyRouter;
