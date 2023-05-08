import { useEffect, useRef, useState } from "react";
import BpmnIo from "../../components/Io/index.tsx";
import LogicFlow from "@logicflow/core";
import { NodeConfig } from "@logicflow/core";
import { Control, DndPanel, Menu } from "@logicflow/extension";
import { BpmnElement } from "../../components/Bpmn2";
import CustomTask from "./customTask";
import Palette from "./components/PalettePanel";
import PropertiesPanel from "./components/PropertiesPanel";
import { BpmnXmlAdapter } from "../../components/BpmnAdapter2";
const data = {};
/**
 * 自定义节点属性导入导出:
 * 方法一: 使用node扩展props
 * 方法二: 导出时做自定义转换
 */
const CustomProps: React.FC<{ readonly?: boolean }> = ({
  readonly = false,
}) => {
  const containerRef = useRef(null);
  const [lf, setLf] = useState<LogicFlow>({} as LogicFlow);
  const [nodeData, setNodeData] = useState<NodeConfig>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const lf = new LogicFlow({
      container: containerRef.current!,
      grid: true,
      // 禁用缩放
      stopZoomGraph: true,
      // 禁用滚动
      stopScrollGraph: true,
      // 线条文本可拖拽
      edgeTextDraggable: true,
      // 节点悬浮取消虚线框，导致聚焦的节点显示不够明显清晰
      hoverOutline: false,
      data,
      plugins: [BpmnElement, BpmnXmlAdapter, DndPanel, Menu],
    });
    // 节点点击
    lf.on("element:click", (e) => {
      console.log(">>>element:click", e);
      setNodeData(e.data);
      setOpen(true);
    });
    // 画布点击,点击后关闭属性面板
    lf.on("blank:click", (e) => {
      console.log(">>>blank:click", e);
      setNodeData(e.data);
      setOpen(false);
    });
    lf.on("connection:not-allowed", (e) => {
      console.error(">>>connection:not-allowed:", e);
    });
    setLf(lf);
    lf.register(CustomTask);
    lf.render();
  }, []);
  return (
    <div className="bpmn-container">
      <div ref={containerRef} className="bpmn"></div>
      <Palette lf={lf} />
      <PropertiesPanel
        open={open}
        lf={lf}
        data={nodeData}
        onClose={() => setOpen(false)}
      />
      <BpmnIo lf={lf} />
    </div>
  );
};
export default CustomProps;
