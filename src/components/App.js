import React, { PureComponent } from "react";
import Button from "./Button";
import DBView from "./DBView";
import ShapeContainer from "./ShapeContainer";

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <Button />

                <DBView />

                <ShapeContainer />
            </div>
        );
    }
}
