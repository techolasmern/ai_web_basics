import { Fragment } from "react";
import { ChildComponent } from "./ChildComponent";

const data = "Hello";

export const App = () => {

  return <Fragment>
    <h1>Hello</h1>
    <p>Hey</p>
    <ChildComponent p1="data1" p2="hey" data={data}>
      <span>This is a child element (App.tsx)</span>
    </ChildComponent>
  </Fragment>
}