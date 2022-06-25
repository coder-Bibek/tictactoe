import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <React.Fragment>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
