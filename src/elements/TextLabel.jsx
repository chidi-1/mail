import BaseMailElement from "./BaseMailElement";
import React from "react";

export default class TextLabel extends BaseMailElement {
    constructor() {
        super();

        this.state = {
            text: 'Text'
        }
    }

    handlerTextChange = event => {
        this.setState({
            text: event.target.textContent
        })
    }

    render() {
        return (
            <>
                <h2 suppressContentEditableWarning={true} contentEditable="true" onInput={event => this.handlerTextChange(event)}>{this.state.text}</h2>
            </>
        )
    }
}