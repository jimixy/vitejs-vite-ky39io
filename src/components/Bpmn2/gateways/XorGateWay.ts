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
		const { x, y, width, height, points } = model;
		const style = model.getNodeStyle();
		return h(
			'g',
			{
				transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})`,
			},
			h('polygon', {
				...style,
				x,
				y,
				points,
			}),
			h(
				'svg',
				{
					x: 2,
					y: 2,
					width: 45,
					height: 45,
					viewBox: '0 0 1724 1024',
				},
				h('path', {
					fill: style.stroke,
					d: 'M1153.48809498 145.41071416L876.2559525 422.80357168l-279.64285752-279.64285752c-13.01785752-13.01785752-34.07142832-13.01785752-47.08928584 0l-35.6785708 35.67857168c-13.01785752 13.01785752-13.01785752 34.07142832 0 47.08928584l279.64285664 279.64285664-292.33928584 292.17857168c-13.66071416 13.66071416-13.66071416 35.67857168 0 49.33928584l33.42857168 33.42857168c13.66071416 13.66071416 35.67857168 13.66071416 49.33928584 0l292.33928584-292.33928584L1168.59523834 880.51785752c13.01785752 13.01785752 34.07142832 13.01785752 47.08928584 0l35.6785708-35.67857168c13.01785752-13.01785752 13.01785752-34.07142832 0-47.08928584l-292.5-292.33928584 277.39285752-277.39285664c13.66071416-13.66071416 13.66071416-35.67857168 0-49.33928584l-33.42857168-33.42857168c-13.5-13.5-35.67857168-13.5-49.33928584 0.16071416z',
				})
			)
		);
	}
}

const XorGateway = {
	type: 'bpmn:xorGateway',
	view: XorGatewayView,
	model: XorGatewayModel,
};

export { XorGatewayView, XorGatewayModel };
export default XorGateway;
