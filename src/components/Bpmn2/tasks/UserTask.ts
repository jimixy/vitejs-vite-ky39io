import { h, RectNode, RectNodeModel } from "@logicflow/core";
import { getBpmnId } from "../getBpmnId";
// TODO 统一管理
export const roleMap = {
	user: "普通用户",
	cs: "CS审核员",
	ro: "RO审核员",
	admin: "管理员",
	superAdmin: "超管",
};
class UserTaskModel extends RectNodeModel {
	static extendKey = "UserTaskModel";
	constructor(data, graphModel) {
		if (!data.id) {
			data.id = `Activity_${getBpmnId()}`;
		}
		super(data, graphModel);
	}
	getNodeStyle() {
		const style = super.getNodeStyle();
		style.stroke = "#B0BFFE";
		return style;
	}
	getTextStyle() {
		const style = super.getTextStyle();
		// style.color = '#fff';
		return style;
	}
	setAttributes() {
		// const { w, h } = this.properties;
		// this.width = w;
		// this.height = h;
		// this.text.editable = false;
		this.sourceRules.push({
			message: "不能越级审核",
			validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
				console.log("1--sourceRules", {
					sourceNode,
					targetNode,
					sourceAnchor,
					targetAnchor,
				});
				if (
					sourceNode?.properties?.role?.includes("cs") &&
					targetNode?.properties?.role?.includes("admin")
				) {
					return false;
				}
				return true;
			},
		});
		// this.targetRules.push({
		// 	message: "只允许连接上方的锚点",
		// 	validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
		// 		return targetAnchor?.type === "top";
		// 	},
		// });
	}
}

class UserTaskView extends RectNode {
	static extendKey = "UserTaskNode";
	getLabelShape() {
		const { model } = this.props;
		const { x, y, width, height } = model;
		const style = model.getNodeStyle();
		return h(
			"svg",
			{
				x: x - width / 2,
				y: y - height / 2 + 5,
				width: 25,
				height: 25,
				viewBox: "0 0 1274 1024",
			},
			h("path", {
				fill: style.stroke,
				d: "M655.807326 287.35973m-223.989415 0a218.879 218.879 0 1 0 447.978829 0 218.879 218.879 0 1 0-447.978829 0ZM1039.955839 895.482975c-0.490184-212.177424-172.287821-384.030443-384.148513-384.030443-211.862739 0-383.660376 171.85302-384.15056 384.030443L1039.955839 895.482975z",
			})
		);
	}
	getShape() {
		const { model } = this.props;
		const { x, y, width, height, radius } = model;
		const style = model.getNodeStyle();
		// todo: 将basic-shape对外暴露，在这里可以直接用。现在纯手写有点麻烦。
		let arr = [];
		if (Array.isArray(model.properties?.role)) {
			arr = model.properties?.role;
		} else {
			arr = [model.properties?.role];
		}
		return h("g", {}, [
			h("rect", {
				...style,
				x: x - width / 2,
				y: y - height / 2,
				rx: 4,
				ry: 4,
				width,
				height,
			}),
			this.getLabelShape(),
			// 添加文本
			h(
				"text",
				{
					x: x - width / 2 + 25,
					y: y - height / 2 + 20,
					fontSize: 12,
					fill: "#000",
					stroke: "none",
					textAnchor: "start",
					dominantBaseline: "middle",
				},
				arr
					?.map?.((r: any) => roleMap[r as keyof typeof roleMap] || "")
					.join?.(",") || ""
			),
		]);
	}
}

const UserTask = {
	type: "bpmn:userTask",
	view: UserTaskView,
	model: UserTaskModel,
};

export { UserTaskView, UserTaskModel };
export default UserTask;
