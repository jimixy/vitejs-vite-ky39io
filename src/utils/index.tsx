import LogicFlow, {
	BaseEdgeModel,
	BaseNodeModel,
	ConnectRule,
	EventType,
} from "@logicflow/core";

export function download(filename: string, text: string) {
	const element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/plain;charset=utf-8," + encodeURIComponent(text)
	);
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

/**
 * 统一校验规则
 */
export const verifyRules = (lf: LogicFlow) => {
	if (!lf) {
		return;
	}
	const modelsMap = lf.graphModel.modelsMap;
	console.log("lf", lf, modelsMap);
	for (const [key, value] of Object.entries(modelsMap)) {
		const sourceRules = value?.sourceRules as ConnectRule[];
		const targetRules = value?.targetRules as ConnectRule[];
		if (sourceRules?.length) {
			// 校验连出的规则
			const results = (value.outgoing.nodes as BaseNodeModel[])
				.map((node) => {
					const source = value as BaseNodeModel;
					const target = node;
					return sourceRules.map((rule) => {
						const isPass = rule.validate(source, target);
						// console.log("1--res", { isPass, rule, value, node });
						return {
							isPass,
							target,
							source,
							// 这里是source的rule
							rule,
						};
					});
				})
				.flat();
			const errorItem = results.find((k) => k.isPass === false);
			if (errorItem) {
				handleError(lf, errorItem);
				return errorItem;
			}
		}
		if (targetRules?.length) {
			// 校验连入的规则
			const results = (value.incoming.nodes as BaseNodeModel[])
				.map((node) => {
					const source = node;
					const target = value as BaseNodeModel;
					return targetRules.map((rule) => {
						const isPass = rule.validate(source, target);
						// console.log("1--res", { isPass, rule, value, node });
						return {
							isPass,
							target,
							source,
							// 这里是target的rule
							rule,
						};
					});
				})
				.flat();
			const errorItem = results.find((k) => k.isPass === false);
			if (errorItem) {
				handleError(lf, errorItem);
				return errorItem;
			}
			// console.log(332342, key, value);
		}
	}
};

/**
 * 校验出错后的处理
 */
export const handleError = (
	lf: LogicFlow,
	errorItem: {
		isPass: boolean;
		target: BaseNodeModel;
		rule: ConnectRule;
		source: BaseNodeModel;
	}
) => {
	if (!lf || !errorItem) {
		return;
	}
	const modelsMap = lf.graphModel.modelsMap;
	const nodeData = errorItem.source.getData();
	lf.graphModel.eventCenter.emit(EventType.CONNECTION_NOT_ALLOWED, {
		data: nodeData,
		msg: errorItem.rule.message,
	});
	// 找到错误的边
	const errorLine = findLineByNode(
		modelsMap,
		errorItem.source,
		errorItem.target
	);
	if (errorLine) {
		lf?.setProperties(errorLine.id, {
			errorStroke: "red",
		});
	}
};

/**
 * 找到两个节点之间的连线
 */
export const findLineByNode = (
	modelsMap: Record<string, BaseNodeModel | BaseEdgeModel>,
	sourceNode: BaseNodeModel,
	targetNode: BaseNodeModel
) => {
	let result = undefined;
	for (const [key, value] of Object.entries(modelsMap)) {
		if (
			value.BaseType === "edge" &&
			value.sourceNodeId === sourceNode.id &&
			value.targetNodeId === targetNode.id
		) {
			result = modelsMap[key];
		}
	}
	return result;
};

/**
 * 处理上传后，json数据格式问题
 */
export const transformJson = (json: any) => {
	if (!json || typeof json !== "object") {
		return {};
	}
	Object.entries(json).map(([key, value]) => {
		if (key === "nodes") {
			const nodes = Array.isArray(json.nodes) ? json.nodes : [json.nodes];
			json[key] = convertToNumber(nodes);
		} else if (key === "edges") {
			const edges = Array.isArray(json.edges) ? json.edges : [json.edges];
			json[key] = convertToNumber(edges);
		} else {
			json[key] = value;
		}
	});
	return json;
};

/**
 * 转换数据格式
 */
export const convertToNumber = (obj: any, keys = ["-x", "-y", "x", "y"]) => {
	const newObj: any = Array.isArray(obj) ? [] : {};
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			const value = obj[key];
			if (typeof value === "string" && keys.includes(key)) {
				newObj[key] = Number(value);
			} else if (typeof value === "object" && value !== null) {
				newObj[key] = convertToNumber(value, keys);
			} else {
				newObj[key] = value;
			}
		}
	}
	return newObj;
};
