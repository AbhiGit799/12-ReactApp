import react from "react";
import { Component } from "react";
import reactDOM from "react-dom/client";
import { App } from "./app";


function AIndex()
{
    return(
        <App/>
    )
}

const aroot = reactDOM.createRoot(document.getElementById("root"));
aroot.render(<AIndex/>)








