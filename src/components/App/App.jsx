import React from "react";
import { Header, Label } from "semantic-ui-react";
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <Header
                as="h1"
                textAlign="center"
            >
                Welcome to my React Webpack Boilerplate!
            </Header>
            <div className="content">
                This project contains every necessary files and configuration to create an app with
                <br />
                React, Redux, Sass and Semantic UI all bundled with Webpack and compied with Babel.
            </div>
            <div className="content">
                Run <Label>yarn</Label> or <Label>npm i</Label> to install dependencies, then
                <br />
                run either <Label>yarn start</Label> or <Label>npm run start</Label> to launch the app.
            </div>
        </div>
    );
};

export default App;