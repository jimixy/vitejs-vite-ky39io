import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef } from "react";
import "./index.css";

// import Test1 from "./test1";
// import Test2 from "./test2";
import Test3 from "./test3";

export default function App() {
  // const refContainer = useRef<any>();
  // useEffect(() => {
  //   const logicflow = new LogicFlow({
  //     container: refContainer.current,
  //     grid: true,
  //     width: 1000,
  //     height: 500,
  //   });
  //   logicflow.render();
  // }, []);

  return (
    <div id="app">
      <Test3 />
    </div>
  );
}
