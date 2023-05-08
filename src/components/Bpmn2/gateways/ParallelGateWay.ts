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
					viewBox: '0 0 1024 1024',
				},
				h('path', {
					fill: style.stroke,
					d: 'M551.306335 479.053913v-204.54559c0-14.755776-11.957267-26.458634-26.713043-26.458634h-18.317516c-14.755776 0-26.713043 11.702857-26.713043 26.458634v204.54559h-202.510311c-14.501366 0-26.204224 11.957267-26.204223 26.204224v20.098385c0 14.501366 11.702857 26.204224 26.204223 26.204223h202.510311v197.676522c0 14.755776 11.957267 26.713043 26.713043 26.713044h18.317516c14.755776 0 26.713043-11.957267 26.713043-26.713044v-197.676522h195.641243c14.501366 0 26.458634-11.957267 26.458633-26.204223v-20.098385c0-14.501366-11.957267-26.204224-26.458633-26.204224h-195.641243z',
				})
			)
		);
	}
}

const ParallelGateway = {
	type: 'bpmn:parallelGateway',
	view: ParallelGatewayView,
	model: ParallelGatewayModel,
};

export { ParallelGatewayView, ParallelGatewayModel };
export default ParallelGateway;
