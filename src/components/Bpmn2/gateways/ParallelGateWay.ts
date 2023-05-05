import { h, PolygonNode, PolygonNodeModel } from '@logicflow/core';
import { getBpmnId } from '../getBpmnId';

class ParallelGatewayModel extends PolygonNodeModel {
	static extendKey = 'ParallelGatewayModel';
	constructor(data, graphModel) {
		if (!data.id) {
			data.id = `Gateway_${getBpmnId()}`;
		}
		if (!data.text) {
			data.text = '';
		}
		console.log(235234);
		if (data.text && typeof data.text === 'string') {
			data.text = {
				value: data.text,
				x: data.x,
				y: data.y + 40,
			};
		}
		super(data, graphModel);
		// 横轴x 往右增, 竖轴y 往下增， 起点为左上角
		this.points = [
			[25, 0],
			[50, 25],
			[25, 50],
			[0, 25],
		];
	}
	getNodeStyle() {
		const style = super.getNodeStyle();
		style.stroke = '#BFCF53';
		return style;
	}
}

class ParallelGatewayView extends PolygonNode {
	static extendKey = 'ParallelGatewayNode';
	getShape() {
		const { model } = this.props;
		const { x, y, width, height } = model;
		const style = model.getNodeStyle();
		return h('g', {}, [
			h(
				'svg',
				{
					x: x - width / 2,
					y: y - height / 2,
					width: 50,
					height: 50,
					viewBox: '0 0 2048 2048',
				},
				h('path', {
					fill: style.stroke,
					d: 'M1024.022 99.36c-19.324-.017-38.646 7.15-52.98 21.55L120.937 971.023c-28.67 28.668-28.537 77.295.132 105.963l849.971 849.965c28.67 28.678 77.294 28.804 105.963 0l850.106-850.1c28.669-28.667 28.536-77.296-.135-105.964L1077.002 120.91c-14.334-14.334-33.657-21.534-52.98-21.55zm-.065 126.045l798.66 798.666l-798.66 798.657l-798.66-798.657l798.66-798.666zm-21.803 329.82c0 .01-9.657 1.838-9.662 1.838c-.01 0-7.908 5.323-7.914 5.323c-.01.01-5.497 8.127-5.502 8.127c0 .01-1.86 9.675-1.863 9.675V977.04H580.188l-.067-.078c0 .01-9.618 2.129-9.623 2.129c-.01.01-7.907 5.322-7.912 5.322l.008-.098c-.01.01-5.497 8.127-5.502 8.127c-.01 0-1.861 9.676-1.865 9.676v43.47s1.848 9.783 1.914 9.85c0 .01 5.478 7.934 5.478 7.934c.01.01 7.957 5.322 7.96 5.322c.01.01 9.656 2.127 9.66 2.127h396.978v396.785l-.063-.058c0 .01 1.916 9.85 1.915 9.85c0 .01 5.476 7.933 5.476 7.933c.01.01 7.96 5.32 7.961 5.32c0 0 9.59 2.032 9.662 2.13l43.461-.01c.011 0 9.846-2.032 9.852-2.032c0 0 7.908-5.32 7.914-5.32c.01-.01 5.47-7.936 5.476-7.936c0 0 1.887-9.82 1.89-9.82V1070.86h396.88c.011.01 9.847-2.031 9.851-2.031c.01 0 7.91-5.322 7.914-5.322c.01-.01 5.471-7.934 5.477-7.934c0 0 1.886-9.82 1.89-9.82v-43.461c0-.01-1.877-9.58-1.874-9.676c-.01-.01-5.45-8.127-5.518-8.127c-.01-.01-7.958-5.32-7.96-5.32c0 .01-9.82-2.13-9.825-2.033h-396.838V580.294c0-.01-1.878-9.577-1.875-9.674c-.01-.01-5.45-8.129-5.45-8.129c-.01-.01-7.956-5.32-7.958-5.32c-.01 0-9.848-1.936-9.852-1.936l-43.469-.01z',
				})
			),
		]);
	}
}

const ParallelGateway = {
	type: 'bpmn:parallelGateway',
	view: ParallelGatewayView,
	model: ParallelGatewayModel,
};

export { ParallelGatewayView, ParallelGatewayModel };
export default ParallelGateway;
