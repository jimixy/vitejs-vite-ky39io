import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef } from "react";
import "./index.css";

import Test1 from "./test1";
import Test2 from "./test2";
import Test3 from "./test3";

export default function App() {
  return (
    <div id="app">
      <Test1 />
    </div>
  );
}
