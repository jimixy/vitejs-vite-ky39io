import React, { useEffect, useState } from "react";
import LogicFlow from "@logicflow/core";
import { BpmnAdapter, BpmnElement, BpmnXmlAdapter, Control, DndPanel, Snapshot } from "@logicflow/extension";
import { Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import "./index.css";
import { download } from "../utils";
import BpmnIo from "../components/Io/index.tsx";
import BpmnPattern from "../components/Pattern/index.tsx";
import UserTask from "../components/UserTask/index.tsx";


const data = {
  nodes: [
    {
      id: 10,
      type: "bpmn:startEvent",
      x: 76,
      y: 178,
      properties: {},
      baseType: "node",
      text: { x: 76, y: 213, value: "StartEvent" },
    },
    {
      id: 11,
      type: "bpmn:endEvent",
      x: 567,
      y: 176,
      properties: {},
      baseType: "node",
      text: { x: 567, y: 211, value: "EndEvent" },
    },
    {
      id: 12,
      type: "bpmn:userTask",
      x: 386,
      y: 59,
      properties: {},
      baseType: "node",
      text: { x: 386, y: 59, value: "UserTask" },
    },
    {
      id: 13,
      type: "bpmn:serviceTask",
      x: 385,
      y: 286,
      properties: {},
      baseType: "node",
      text: { x: 385, y: 286, value: "ServiceTask" },
    },
    {
      id: 14,
      type: "bpmn:exclusiveGateway",
      x: 206,
      y: 178,
      properties: {},
      baseType: "node",
    },
  ],
  edges: []
}


// const defaultData = `<bpmn:definitions id="Definitions_34iq5ck" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="7.3.0">	
// <bpmn:process id="Process_17uvvml" isExecutable="false">	
//   <bpmn:serviceTask id="Activity_0e1gfu6" />	
//   <bpmn:userTask id="Activity_2mr9pq8" />	
//   <bpmn:startEvent id="Event_2vpmq0b" name="开始" />	
// </bpmn:process>	
// <bpmndi:BPMNDiagram id="BPMNDiagram_1">	
//   <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_17uvvml">	
      
//       <bpmndi:BPMNShape id="Activity_0e1gfu6_di" bpmnElement="Activity_0e1gfu6">	
//         <dc:Bounds x="382" y="186" width="100" height="80" />	
//       </bpmndi:BPMNShape>	
      
//       <bpmndi:BPMNShape id="Activity_2mr9pq8_di" bpmnElement="Activity_2mr9pq8">	
//         <dc:Bounds x="522" y="173" width="100" height="80" />	
//       </bpmndi:BPMNShape>	
      
//       <bpmndi:BPMNShape id="Event_2vpmq0b_di" bpmnElement="Event_2vpmq0b">	
//         <dc:Bounds x="218" y="215" width="40" height="40" />	
//         <bpmndi:BPMNLabel>	
//           <dc:Bounds x="228" y="268" width="20" height="14" />	
//         </bpmndi:BPMNLabel>	
//       </bpmndi:BPMNShape>	
//   </bpmndi:BPMNPlane>	
// </bpmndi:BPMNDiagram>	
// </bpmn:definitions>`

export default function AdapterExample() {
  const [lf, setLf] = useState<LogicFlow>({} as LogicFlow);
  
  useEffect(() => {
    const lf = new LogicFlow({
      container: document.querySelector("#graph") as HTMLElement,
      stopScrollGraph: true,
      stopZoomGraph: true,
      plugins: [BpmnElement, Snapshot, BpmnXmlAdapter, Control, DndPanel],
    });
    setLf(lf)
    // lf.extension.dndPanel.setPatternItems(dndItem);
    lf.register(UserTask);
    lf.render();
  }, []);

  function exportAdapterData() {
    const adapterData = lf.getGraphData();
    download("logic-flow.json", JSON.stringify(adapterData));
  }

  return <>
    <div id="graph" className="viewport"></div>
    <BpmnIo lf={lf} />
    <BpmnPattern lf={lf}/>
  </>;
}
