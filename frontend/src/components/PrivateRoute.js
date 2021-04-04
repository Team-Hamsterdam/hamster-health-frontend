// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { api } from "./Api";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`${api}/auth/check`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            const data = await res.json();
            return data.token;
        } catch {
            console.log("Failed checking");
        }
    };

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
