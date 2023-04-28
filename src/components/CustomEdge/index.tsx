import React from "react";
// import ReactDOM from "react-dom";
import { BaseEdgeModel, LineEdge, PolylineEdgeModel, h } from "@logicflow/core";
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";

const DEFAULT_WIDTH = 48;
const DEFAULT_HEIGHT = 32;

class CustomEdgeModel extends BaseEdgeModel  {
  setAttributes() {
    this.isAnimation = true;
  }
  getEdgeAnimationStyle() {
    const style = super.getEdgeAnimationStyle();
    style.strokeDasharray = "5 5";
    style.animationDuration = "30s";
    return style;
  }
  // getEdgeStyle() {
  //   const edgeStyle = super.getEdgeStyle();
  //   //可以自己设置线的显示样式，甚至隐藏掉原本的线，自己用react绘制
  //   edgeStyle.strokeDasharray = "4 4";
  //   edgeStyle.stroke = "#DDDFE3";
  //   return edgeStyle;
  // }
}

const CustomLine: React.FC = () => {
  return <div className="custom-edge">aaa</div>;
};

class CustomEdgeView extends LineEdge {
  // getEdge() {
  //   const { model } = this.props;
  //   const { customWidth = DEFAULT_WIDTH, customHeight = DEFAULT_HEIGHT } =
  //     model.getProperties();
  //   const id = model.id;
  //   const edgeStyle = model.getEdgeStyle();
  //   const { startPoint, endPoint, arrowConfig } = model;
  //   const lineData = {
  //     x1: startPoint.x,
  //     y1: startPoint.y,
  //     x2: endPoint.x,
  //     y2: endPoint.y,
  //   };
  //   const positionData = {
  //     x: (startPoint.x + endPoint.x - customWidth) / 2,
  //     y: (startPoint.y + endPoint.y - customHeight) / 2,
  //     width: customWidth,
  //     height: customHeight,
  //   };
  //   const wrapperStyle = {
  //     width: customWidth,
  //     height: customHeight,
  //   };

  //   // setTimeout(() => {
  //   //   // console.log("00", document, document.querySelector);
  //   //   // console.log("container", document.querySelector("#" + id));
  //   //   createPortal(<CustomLine />, document.querySelector("#" + id)!);
  //   //   // container.render(<CustomLine />);
  //   // }, 3000);

  //   return h("g", {}, [
  //     h("line", { ...lineData, ...edgeStyle, ...arrowConfig }),
  //     h("foreignObject", { ...positionData }, [
  //       h("div", {
  //         id,
  //         style: wrapperStyle,
  //         className: "lf-custom-edge-wrapper",
  //       }),
  //     ]),
  //   ]);
  // }
  // getAppend() {
  //   return h("g", {}, []);
  // }
}

export default {
  type: "CustomEdge",
  view: CustomEdgeView,
  model: CustomEdgeModel,
};
