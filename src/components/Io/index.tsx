import React from "react";
import LogicFlow from "@logicflow/core";
import { download } from "../../utils";
import { lfJson2Xml, lfXml2Json } from "@logicflow/extension";

type IProps = {
  lf: LogicFlow;
};

type FileEventTarget = EventTarget & { files: FileList };

export const coverToXml = (xml: string) => {
  const xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n';
  return `
    ${xmlDecl}
    <root>
    ${xml}
    </root>
  `;
};

export default function BpmnIo(props: IProps) {
  const { lf } = props;
  console.log(32, lf);
  function downloadXml() {
    const data = lf.getGraphData() as string;
    download("logicflow.xml", lfJson2Xml(data));
  }
  function uploadXml(ev: React.ChangeEvent<HTMLInputElement>) {
    const file = (ev.target as FileEventTarget).files[0];
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target) {
        const xml = event.target.result as string;
        // fix: xml必须有一个根元素
        const json = lfXml2Json(`
          <root>
          ${xml}
          </root>
        `);
        const nodes = Array.isArray(json.root.nodes)
          ? json.root.nodes
          : [json.root.nodes];
        const edges = Array.isArray(json.root.edges)
          ? json.root.edges
          : [json.root.edges];
        // console.log("1--upload", {
        //   xml,
        //   json,
        //   nodes,
        //   edges,
        // });
        lf.render({
          ...json.root,
          nodes,
          edges,
        });
      }
    };
    reader.readAsText(file); // you could also read images and other binaries
  }

  function downloadImage() {
    const { lf } = props;
    lf.getSnapshot();
  }

  return (
    <div className="graph-io">
      <span title="下载 XML" onMouseDown={() => downloadXml()}>
        下载XML
      </span>
      <span
        id="download-img"
        style={{ marginLeft: "10px", marginRight: "10px" }}
        title="下载图片"
        onMouseDown={() => downloadImage()}
      >
        下载图片
      </span>
      <span id="upload-xml" title="上传XML">
        <input
          type="file"
          className="upload"
          onChange={(ev) => uploadXml(ev)}
        />
        上传XML
      </span>
    </div>
  );
}
