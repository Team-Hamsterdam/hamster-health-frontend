import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import "./index.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import Leaderboard from "./components/Leaderboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

function App() {
    let location = useLocation();

    useEffect(() => {
        document.body.classList.add("is-loaded");
    }, [location]);

    document.getElementById("root").classList.add("background1");
    return (
        <React.Fragment>
            <Router>
                <AppRoute
                    exact
                    path="/"
                    component={Home}
                    layout={LayoutDefault}
                />

                <Route path="/register" render={(props) => <Register />} />
                <Route path="/login" render={(props) => <Login />} />
                <PrivateRoute path="/tasks" component={Tasks} />
            </Router>
        </React.Fragment>
    );
}

export default App;
