import React, { ReactElement, useEffect } from 'react';
import LogicFlow from '@logicflow/core';
import './index.css';
type IProps = {
	lf: LogicFlow;
};

export default function BpmnPattern(props: IProps): ReactElement {
	const { lf } = props;
	function addStartNode() {
		lf.dnd.startDrag({
			type: 'bpmn:startEvent',
			text: '开始',
		});
	}
	function addUserTask() {
		lf.dnd.startDrag({
			type: 'bpmn:userTask',
		});
	}
	function addUserTask2() {
		lf.dnd.startDrag({
			type: 'bpmn:userTask2',
		});
	}
	function addServiceTask() {
		lf.dnd.startDrag({
			type: 'bpmn:serviceTask',
		});
	}
	function addGateWay() {
		lf.dnd.startDrag({
			type: 'bpmn:exclusiveGateway',
		});
	}
	function addEndNode() {
		lf.dnd.startDrag({
			type: 'bpmn:endEvent',
			text: '结束',
		});
	}
	function openSelection() {
		lf.updateEditConfig({
			stopMoveGraph: true,
		});
	}

	useEffect(() => {
		console.log(2342, lf);
		lf?.on?.('selection:selected', () => {
			console.log('selection');
			lf.updateEditConfig({
				stopMoveGraph: false,
			});
		});
	}, [lf]);

	return (
		<div className='pattern'>
			<div className='pattern-selection' onMouseDown={() => openSelection()} />
			<div>选区</div>
			<div className='pattern-start' onMouseDown={() => addStartNode()} />
			<div>开始</div>
			<div className='pattern-user' onMouseDown={() => addUserTask()}></div>
			<div>用户任务</div>
			<div className='pattern-user' onMouseDown={() => addServiceTask()}></div>
			<div>系统任务</div>
			<div className='pattern-condition' onMouseDown={() => addGateWay()}></div>
			<div>条件判断</div>
			<div className='pattern-end' onMouseDown={() => addEndNode()}></div>
			<div>结束</div>
			<div className='pattern-user' onMouseDown={() => addUserTask2()}></div>
			<div>用户任务2</div>
		</div>
	);
}
