import React from "react";
import Item from "./component/Item"
import Label from "./component/Label"
import ItemsList from "./component/ItemsList"
import './App.css';

function App() {
  return (
    <div className="App">
      <Item title="First app"/>
      {[
          <Label title="first name"/>,
          <Label title="second name"/>,
          <Label title="year"/>
        ]}
     <ItemsList/>
    </div>
  );
}

export default App;
