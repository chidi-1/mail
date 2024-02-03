import TextLabel from "../elements/TextLabel";
import BaseMailElementFabric from "./BaseMailElementFabric";

export default class TextLabelElementFabric extends BaseMailElementFabric{
    constructor() {
        super();
    }

    createReactComponentRef(ref) {
        return <TextLabel ref={ref}/>;
    }

    createReactComponent() {
        return <TextLabel />;
    }
}