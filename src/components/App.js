import React, { PureComponent } from "react";
import Button from "./Button";
import Square from "./Square";

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <Button />
                <Square />
            </div>
        );
    }
}
