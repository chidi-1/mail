import React from "react";

export default class BaseMailElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            childCount: 0
        }
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
        this.setState({
            childCount: this.children.length
        })
    }

    render() {
        return (
            <>
                <h1>Base</h1>
                {/* нужно что-то доделать */}
            </>
        )
    }
}