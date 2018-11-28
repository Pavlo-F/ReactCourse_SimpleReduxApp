import React, { PureComponent } from "react";
import Button from "./Button";
import Square from "./Square";
import DBView from "./DBView";

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <Button />
                <Square />
                <DBView />
            </div>
        );
    }
}
