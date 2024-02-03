import React from "react";
import './App.css'
import BaseMailElementFabric from "./Chelyabinsk/BaseMailElementFabric";
import RowFactory from "./Chelyabinsk/RowFactory";
import TextLabelElementFabric from "./Chelyabinsk/TextLabelFactory";

function App() {
  const fabric = new RowFactory();
  const elementRef = React.createRef()
  const element = fabric.createReactComponentRef(elementRef);

  const textFabric = new TextLabelElementFabric();
  const textRef = React.createRef();

  return (
    <>
      {textFabric.getToolbarIconComponent(elementRef)}
      {element}
    </>
  )
}

export default App
