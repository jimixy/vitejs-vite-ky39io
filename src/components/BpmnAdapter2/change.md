# 文件更改记录

1. 修复多选问题
   index.ts toNormalJson 函数 如果是字符串，直接返回
2. 修复图形显示问题
   json2xml.ts toXml 函数 多了一个$字符
3. 生成 xml 删除时，不显示 bpmn:
   index.ts convertBpmn2LfData 函数 更改类型判断 if (typeof value === "object")
4. 自定义元素时，要手动设置元素尺寸，否则导入时图形位置不对
   index.ts

```ts
BpmnAdapter.shapeConfigMap.set("xorGateway", {
	width: 100,
	height: 80,
});

BpmnAdapter.shapeConfigMap.set("parallelGateway", {
	width: 100,
	height: 80,
});
```
