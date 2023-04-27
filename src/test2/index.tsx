import React, { useEffect } from "react";
import LogicFlow from "@logicflow/core";
import { BpmnAdapter, Control, DndPanel } from "@logicflow/extension";
import { Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import "./index.css";
import { download } from "../utils";

const dndItem = [
  {
    type: "rect",
    label: "矩形",
    className: "adpter-shape adpter-rect",
  },
  {
    type: "circle",
    label: "圆形",
    className: "adpter-shape adpter-circle",
  },
];

let lf: LogicFlow;

export default function AdapterExample() {
  useEffect(() => {
    lf = new LogicFlow({
      container: document.querySelector("#graph") as HTMLElement,
      stopScrollGraph: true,
      stopZoomGraph: true,
      plugins: [BpmnAdapter, Control, DndPanel],
    });
    lf.extension.dndPanel.setPatternItems(dndItem);
    lf.render();
  }, []);

  function exportAdapterData() {
    const adapterData = lf.getGraphData();
    download("logic-flow.json", JSON.stringify(adapterData));
  }

  return <div id="graph" className="viewport"></div>;
}
