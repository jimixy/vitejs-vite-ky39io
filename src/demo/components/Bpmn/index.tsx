import { useEffect, useRef, useState } from "react";
import BpmnIo from "@/components/Io/index.tsx";
import LogicFlow from "@logicflow/core";
import { NodeConfig } from "@logicflow/core";
import {
	Control,
	DndPanel,
	Menu,
	SelectionSelect,
	Snapshot,
} from "@logicflow/extension";
import { BpmnElement } from "@/components/Bpmn2";
import Palette from "../PalettePanel";
import PropertiesPanel from "../PropertiesPanel";
import { BpmnXmlAdapter } from "@/components/BpmnAdapter2";
import { initXml } from "@/demo/data";
import { Button, message } from "antd";
import { handleError, verifyRules } from "@/utils";
import "./index.less";

const Bpmn: React.FC<{ readonly?: boolean }> = ({ readonly = false }) => {
	const containerRef = useRef(null);
	const [lf, setLf] = useState<LogicFlow | undefined>(undefined);
	const [nodeData, setNodeData] = useState<NodeConfig>();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!lf) {
			const initLf = new LogicFlow({
				container: containerRef.current!,
				// 禁用缩放
				stopZoomGraph: true,
				// 禁用滚动
				stopScrollGraph: true,
				// 线条文本可拖拽
				edgeTextDraggable: true,
				// 节点悬浮取消虚线框，导致聚焦的节点显示不够明显清晰
				hoverOutline: false,
				keyboard: {
					enabled: true,
				},
				grid: {
					size: 10,
					visible: true,
					type: "mesh",
					config: {
						color: "#DCDCDC", // 设置网格的颜色
					},
				},
				plugins: [
					BpmnElement,
					BpmnXmlAdapter,
					DndPanel,
					Menu,
					Snapshot,
					Control,
					SelectionSelect,
				],
				isSilentMode: !!readonly,
				// 禁用节点文本编辑，仅能通过右侧属性面板变更
				nodeTextEdit: false,
				// 禁用线条文本编辑，仅能通过右侧属性面板变更
				edgeTextEdit: false,
			});
			// 节点点击
			initLf.on("element:click", (e) => {
				console.log(">>>element:click", e, initLf);
				setNodeData(e.data);
				setOpen(true);
			});
			// 画布点击,点击后关闭属性面板
			initLf.on("blank:click", (e) => {
				console.log(">>>blank:click", e);
				setNodeData(e.data);
				setOpen(false);
			});
			initLf.on("connection:not-allowed", (e) => {
				console.error(">>>connection:not-allowed:", e);
				e?.msg && message.error(e?.msg);
			});
			setLf(initLf);
			initLf.render(initXml);
			// initLf.render();
		} else {
			lf.updateEditConfig({
				isSilentMode: !!readonly,
				stopMoveGraph: !!readonly,
				nodeSelectedOutline: !readonly,
				edgeSelectedOutline: !readonly,
			});
		}
	}, [readonly]);

	const handleVerify = () => {
		const errorItem = verifyRules(lf!);
		if (errorItem) {
			return;
		}
		message.success("校验通过");
	};

	return (
		<div className="bpmn-container">
			<div ref={containerRef} className="bpmn"></div>
			{!readonly && (
				<>
					<Palette lf={lf} />
					<PropertiesPanel
						open={open}
						lf={lf}
						data={nodeData}
						onClose={() => setOpen(false)}
					/>
					<BpmnIo lf={lf!} />
					<Button
						className="verify-rules"
						type="primary"
						onClick={handleVerify}
					>
						校验
					</Button>
				</>
			)}
		</div>
	);
};
export default Bpmn;
