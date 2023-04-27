import LogicFlow from "@logicflow/core";
import { useEffect, useRef } from "react";
import "./index.css";

import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import "antd/dist/reset.css";

import Test1 from "./test1";
import Test2 from "./test2";
import Test3 from "./test3";
import Test4 from "./test4";

export default function App() {
  return (
    <div id="app">
      <Test2 />
    </div>
  );
}
