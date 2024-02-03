import BaseMailElement from "../elements/BaseMailElement";
import ToolbarIconComponent from "../elements/ToolbarIconComponent";

export default class BaseMailElementFabric {
    constructor() {
    }

    createReactComponentRef() {}

    createReactComponent() {}

    getToolbarIconComponent(elementRef) {
        return <ToolbarIconComponent target={elementRef} spawnFunction={this.createReactComponent}/>;
    }
}