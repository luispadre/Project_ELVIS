import React from "react"
import Routes from "../Routes";
import AuthContext from "./Auth.Context";
import AppContext from "./App.Context";
export default function () {
    return (
        <React.Fragment>
            <AuthContext>
                <AppContext>
                    <Routes />
                </AppContext>
            </AuthContext>
        </React.Fragment>
    )
}