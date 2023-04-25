import React, { useEffect, useRef, useState } from "react";
import BpmnIo from "../components/Io/index.tsx";
import LogicFlow from "@logicflow/core";
import "./index.css";
import UserTask from "../components/UserTask/index.tsx";
import { BpmnAdapter, BpmnElement, BpmnXmlAdapter } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
// import BpmnPattern from "./pattern.tsx";

interface Props {}

// LogicFlow.use(BpmnAdapter);

const config = {
  stopScrollGraph: true,
  stopZoomGraph: true,
};

const data = {
  nodes: [
    {
      id: 12,
      type: "bpmn:userTask",
      x: 386,
      y: 59,
      // properties: {},
      baseType: "node",
      text: { x: 386, y: 59, value: "UserTask" },
    },
    {
      id: 14,
      type: "bpmn:userTask2",
      x: 500,
      y: 100,
      properties: {},
      baseType: "node",
      text: "userTask2",
    },
  ],
  // edges: [
  //   {
  //     type: "polyline",
  //     sourceNodeId: 10,
  //     targetNodeId: 20,
  //   },
  // ],
};

const Test1: React.FC<Props> = () => {
  const [lf, setLf] = useState<LogicFlow>();
  useEffect(() => {
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector("#graph") as HTMLElement,
      plugins: [BpmnElement],
    });
    lf.register(UserTask);
    setLf(lf);
    lf.render(data);
    console.log("1--render");
  }, []);

  const addNode = (type: string) => {
    lf?.dnd?.startDrag({
      type: type,
    });
  };

  return (
    <div className="bpmn-example-container">
      <div id="graph" className="viewport"></div>
      {/* <BpmnPattern lf={lf} /> */}
      <BpmnIo lf={lf} />
    </div>
  );
};

export default Test1;
