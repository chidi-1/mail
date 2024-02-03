import BaseMailElement from "./BaseMailElement";
import React from "react";

export default class Row extends BaseMailElement {
    render() {
        return (
            <>
                <h2>Row</h2>
                {this.children.map((child) => <div key={new Date()}>{child}</div> )}
            </>
        )
    }
}