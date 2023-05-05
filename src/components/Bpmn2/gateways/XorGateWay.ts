import { h, PolygonNode, PolygonNodeModel } from '@logicflow/core';
import { getBpmnId } from '../getBpmnId';

class XorGatewayModel extends PolygonNodeModel {
	static extendKey = 'XorGatewayModel';
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

class XorGatewayView extends PolygonNode {
	static extendKey = 'XorGatewayNode';
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
					d: 'M1024.022 99.36c-19.324-.017-38.646 7.15-52.98 21.55L120.937 971.023c-28.67 28.668-28.537 77.295.132 105.963l849.971 849.965c28.67 28.678 77.294 28.804 105.963 0l850.106-850.1c28.669-28.667 28.536-77.296-.135-105.964L1077.002 120.91c-14.334-14.334-33.657-21.534-52.98-21.55zm-.065 126.045l798.66 798.666l-798.66 798.657l-798.66-798.657l798.66-798.666zM725.686 669.792c-.014 0-9.612 1.838-9.62 1.838c-.01 0-8.144 5.513-8.15 5.513l-30.732 30.739c-.01 0-5.61 8.225-5.614 8.322c0 .01-1.737 9.48-1.736 9.48c0 .01 1.868 9.385 1.871 9.385c0 .01 5.338 8.322 5.344 8.322l280.707 280.7l-280.572 280.574v-.088c0 .01-5.61 8.32-5.614 8.32c0 .01-1.736 9.483-1.736 9.483c0 .02 1.868 9.385 1.871 9.385c0 0 5.339 8.223 5.344 8.32l30.734 30.728c.01.01 8.411 5.516 8.418 5.516c.01 0 9.346 1.838 9.354 1.838c.01 0 9.479-1.74 9.486-1.74c.01 0 8.28-5.614 8.285-5.614l280.576-280.582l280.637 280.641c.01.01 8.412 5.516 8.418 5.516c.01 0 9.346 1.838 9.354 1.838c.01 0 9.48-1.743 9.488-1.743c.01 0 8.276-5.61 8.281-5.61l30.735-30.73c.01-.01 5.475-8.126 5.48-8.126c0-.01 1.871-9.58 1.871-9.676c0-.01-1.869-9.385-1.873-9.385c0 0-5.472-8.418-5.478-8.418l-280.606-280.611l280.608-280.604c.01 0 5.473-8.127 5.478-8.127c0-.01 1.871-9.578 1.871-9.578c0-.02-1.868-9.385-1.87-9.385c0-.01-5.606-8.322-5.612-8.322l-30.735-30.738c-.01 0-8.143-5.514-8.15-5.514c-.01 0-9.345-1.84-9.353-1.84c-.01 0-9.613 1.84-9.62 1.84c-.01 0-8.145 5.514-8.15 5.514l-280.613 280.613l-280.739-280.748v-.088c-.01 0-8.278-5.32-8.285-5.32c-.01 0-9.34-1.837-9.351-1.838h-.002z',
				})
			),
		]);
	}
}

const XorGateway = {
	type: 'bpmn:xorGateway',
	view: XorGatewayView,
	model: XorGatewayModel,
};

export { XorGatewayView, XorGatewayModel };
export default XorGateway;
