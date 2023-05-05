import { RectNodeModel, RectNode } from "@logicflow/core";

class CustomTaskModel extends RectNodeModel {
  setAttributes(): void {
    this.width = 100;
    this.height = 80;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    const properties = this.properties;
    if (properties.status === "success") {
      style.stroke = "green";
    } else if (properties.status === "failed") {
      style.stroke = "red";
    } else if(properties.status === 'running') {
      style.stroke = "rgb(24, 125, 255)";
    } else {
      style.stroke = "gray";
      style.strokeDasharray = "3 3";
    }
    return style;
  }
}
class CustomTaskView extends RectNode {}
const CustomTask = {
  type: "bpmn:userTask2",
  view: CustomTaskView,
  model: CustomTaskModel,
};
export default CustomTask;
