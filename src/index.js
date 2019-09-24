import React from "react";
import ReactDOM from "react-dom";
import './scss/app.scss'
import { html } from "../README.md";
import Header from './components/Header'

class HelloMessage extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Markdown content as HTML</h1>
                <div className="content" dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Frontend Guild" />, App);
