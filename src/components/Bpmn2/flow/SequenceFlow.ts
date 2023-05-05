import { PolylineEdge, PolylineEdgeModel } from '@logicflow/core';
import { getBpmnId } from '../getBpmnId';

class SequenceFlowModel extends PolylineEdgeModel {
	static extendKey = 'SequenceFlowModel';
	constructor(data, graphModel) {
		if (!data.id) {
			data.id = `Flow_${getBpmnId()}`;
		}
		super(data, graphModel);
	}
	setAttributes() {
		this.isAnimation = true;
	}
	getEdgeAnimationStyle() {
		const style = super.getEdgeAnimationStyle();
		style.strokeDasharray = '5 5';
		style.animationDuration = '60s';
		style.stroke = '#000';
		return style;
	}
	getEdgeStyle() {
		const style = super.getEdgeStyle();
		style.stroke = '#000';
		// style.strokeWidth = 2;
		return style;
	}
}

class SequenceFlowView extends PolylineEdge {
	static extendKey = 'SequenceFlowEdge';
}

const SequenceFlow = {
	type: 'bpmn:sequenceFlow',
	view: SequenceFlowView,
	model: SequenceFlowModel,
};

export { SequenceFlowView, SequenceFlowModel };
export default SequenceFlow;
