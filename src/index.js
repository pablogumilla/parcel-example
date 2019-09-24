import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import './scss/app.scss'
import { html } from "../README.md";

const Header = lazy(() => import('./components/Header'));

class HelloMessage extends React.Component {
    render() {
        return <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
            </Suspense>
            <div className="container">
                <h1>Markdown content as HTML</h1>
                <div className="content" dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Frontend Guild" />, App);
