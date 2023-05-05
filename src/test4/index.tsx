import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import LogicFlow from '@logicflow/core';
import PropertyPanel from './components/property';
import NodePanel from './components/NodePanel';
import RegisteNode from './components/registerNode';
import { themeApprove, data, xml } from './config';
import './index.css';
import {
	// BpmnElement,
	// BpmnXmlAdapter,
	Menu,
	Snapshot,
} from '@logicflow/extension';
import BpmnIo from '../components/Io';
import { BpmnXmlAdapter } from '../components/BpmnAdapter2';
import { BpmnElement } from '../components/Bpmn2';
import UserTask from '../components/UserTask';

const config = {
	stopScrollGraph: true,
	stopZoomGraph: true,
	grid: {
		size: 10,
		visible: true,
		type: 'mesh',
		config: {
			color: '#DCDCDC', // 设置网格的颜色
		},
	},
	keyboard: { enabled: true },
	style: themeApprove,
};

export default function ApproveExample() {
	const [lf, setLf] = useState({} as LogicFlow);
	const [nodeData, setNodeData] = useState();

	useEffect(() => {
		const lf = new LogicFlow({
			...config,
			container: document.querySelector('#graph') as HTMLElement,
			plugins: [Menu, BpmnElement, Snapshot, BpmnXmlAdapter],
		});
		setLf(lf);
		console.log(35, lf);
		RegisteNode(lf);
		lf.register(UserTask);
		lf.extension.menu.addMenuConfig({
			nodeMenu: [
				{
					text: '属性',
					callback(node: any) {
						alert(`
              节点id：${node.id}
              节点类型：${node.type}
              节点坐标：(x: ${node.x}, y: ${node.y})`);
					},
				},
			],
			edgeMenu: [
				{
					text: '属性',
					callback(edge: any) {
						alert(`
              边id：${edge.id}
              边类型：${edge.type}
              源节点id：${edge.sourceNodeId}
              目标节点id：${edge.targetNodeId}`);
					},
				},
			],
			graphMenu: [],
		});
		lf.render();
		// lf.render(xml);
		initEvent(lf);
	}, []);
	const initEvent = (lf: LogicFlow) => {
		lf.on('element:click', ({ data }) => {
			setNodeData(data);
			console.log(JSON.stringify(lf.getGraphData()));
		});
		lf.on('connection:not-allowed', (data: any) => {
			message.error(data.msg);
		});
	};
	// 更新属性
	const updateProperty = (id: string, data: any) => {
		const node = lf.graphModel.nodesMap[id];
		const edge = lf.graphModel.edgesMap[id];
		if (node) {
			node.model.setProperties(Object.assign(node.model.properties, data));
		} else if (edge) {
			edge.model.setProperties(Object.assign(edge.model.properties, data));
		}
	};
	// 隐藏属性面板
	const hidePropertyPanel = () => {
		setNodeData(undefined);
	};
	return (
		<div className='approve-example-container'>
			<div className='node-panel'>{NodePanel(lf)}</div>
			<div id='graph' className='viewport' />
			{nodeData ? (
				<div className='property-panel'>
					{PropertyPanel(nodeData, updateProperty, hidePropertyPanel)}
				</div>
			) : (
				''
			)}
			<BpmnIo lf={lf} />
		</div>
	);
}
