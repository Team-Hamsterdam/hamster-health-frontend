import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import "./index.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

function App() {
    const childRef = useRef();
    let location = useLocation();
    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add("is-loaded");
        childRef.current.init();
    }, [location]);
    return (
        <>
            <ScrollReveal
                ref={childRef}
                children={() => (
                    <Switch>
                        <AppRoute
                            exact
                            path="/"
                            component={Home}
                            layout={LayoutDefault}
                        />

                        <AppRoute path="/register" component={Register} />
                        <AppRoute path="/login" component={Login} />
                    </Switch>
                )}
            />
        </>
    );
}

export default App;
