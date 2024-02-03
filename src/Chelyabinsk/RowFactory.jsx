import BaseMailElementFabric from "./BaseMailElementFabric";
import Row from "../elements/Row";
import BaseMailElement from "../elements/BaseMailElement";

export default class RowFactory extends BaseMailElementFabric {
    constructor() {
        super();
    }

    createReactComponentRef(ref) {
        return <Row ref={ref}/>;
    }

    createReactComponent() {
        return <Row/>;
    }
}