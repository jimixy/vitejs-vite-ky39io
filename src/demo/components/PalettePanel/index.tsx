import React, { useEffect } from "react";
import type { LogicFlow } from "@logicflow/core";
import { Space } from "antd";
import "./index.css";
import { nodeList } from "../../data";
/**
 * 节点选择面板
 */
const Palette: React.FC<{ lf?: LogicFlow }> = ({ lf }) => {
	const handleDrag = (node: (typeof nodeList)[0]) => {
		lf?.dnd.startDrag({
			type: node.type,
			text: node.text,
		});
	};

	const handleSelection = () => {
		lf?.extension.selectionSelect.openSelectionSelect();
		lf?.once("selection:selected", () => {
			lf?.extension.selectionSelect.closeSelectionSelect();
		});
	};
	return (
		<Space direction="vertical" className="custom-palette">
			<div className="node">
				<div className="node-shape" onMouseDown={handleSelection}>
					<div className="custom-pattern-selection"></div>
				</div>
				<div className="node-label">选区</div>
			</div>
			{nodeList.map((node, index) => {
				return (
					<div className="node" key={index}>
						<div className="node-shape" onMouseDown={() => handleDrag(node)}>
							{node?.shape}
						</div>
						<div className="node-label">{node.text}</div>
					</div>
				);
			})}
		</Space>
	);
};
export default Palette;
