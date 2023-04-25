import React, { useEffect, useRef, useState } from "react";
import BpmnIo from "../components/Io/index.tsx";
import LogicFlow from "@logicflow/core";
import "./index.css";
import UserTask from "../components/UserTask/index.tsx";
import Square from "../components/Square/index.tsx";
import { BpmnElement } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import CustomEdge from "../components/CustomEdge/index.tsx";
// import BpmnPattern from "./pattern.tsx";

interface Props {}

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
    {
      id: 10,
      type: "square2",
      x: 1000,
      y: 100,
      text: "正方形",
    },
    {
      id: 20,
      type: "circle",
      x: 1200,
      y: 200,
      text: "圆形",
    },
    {
      id: 30,
      type: "diamond",
      x: 1000,
      y: 300,
      text: "其他节点",
    },
    {
      id: 1,
      type: "rect",
      x: 100,
      y: 100,
      text: "节点1",
    },
    {
      id: 2,
      type: "circle",
      x: 300,
      y: 200,
      text: "节点2",
    },
  ],
  edges: [
    {
      sourceNodeId: 1,
      targetNodeId: 2,
      type: "polyline",
      text: "连线",
    },
    {
      type: "CustomEdge",
      sourceNodeId: 10,
      targetNodeId: 30,
    },
  ],
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
    lf.register(Square);
    lf.register(CustomEdge);
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
