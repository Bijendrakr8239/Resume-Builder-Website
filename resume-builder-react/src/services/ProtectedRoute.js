import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "./AuthService";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (AuthService.isLoggedIn()) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    </>
  );
}
