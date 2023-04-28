import { HtmlNode, HtmlNodeModel } from "@logicflow/core";
import React from "react";
import { Input } from "antd";
import * as ReactDom from "react-dom";

class CustomHtmlModel extends HtmlNodeModel {
  /**
   * HTML节点需要预先定义好节点的宽高
   */
  setAttributes() {
    this.width = 200;
    this.height = 160;
  }
}

const CustomContent = () => {
  return (
    <div>
      哈哈哈
      <Input placeholder="请输入内容" />
    </div>
  );
};

class CustomHtmlNode extends HtmlNode {
  setHtml(rootEl: any) {
    rootEl.innerHTML = "";
    // const el = document.createElement("input");
    // rootEl.appendChild(el);
    // const node = ReactDom.createPortal(<CustomContent />, rootEl);
    // rootEl.appendChild(node);
    ReactDom.render(<CustomContent />, rootEl);
  }
}
export default {
  type: "customHtml",
  model: CustomHtmlModel,
  view: CustomHtmlNode,
};
