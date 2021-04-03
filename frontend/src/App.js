import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import "./index.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

function App() {
    let location = useLocation();
    useEffect(() => {
        document.body.classList.add("is-loaded");
    }, [location]);
    return (
        <React.Fragment>
            <Router>
                <AppRoute
                    exact
                    path="/"
                    component={Home}
                    layout={LayoutDefault}
                />

                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Router>
        </React.Fragment>
    );
}

export default App;
