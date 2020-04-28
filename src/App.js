import React from "react";
import "./components/Header";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
