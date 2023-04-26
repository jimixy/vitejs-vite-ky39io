import React from "react";
import LogicFlow from "@logicflow/core";
import { download, transformJson } from "../../utils";
import { coverInXml, coverOutXml } from "../../utils/xmlWrap";

type IProps = {
  lf: LogicFlow;
};

type FileEventTarget = EventTarget & { files: FileList };

export default function BpmnIo(props: IProps) {
  const { lf } = props;
  // console.log(32, lf);
  function downloadXml() {
    const data = lf.getGraphData() as string;
    console.log(3243, data);
    download("logicflow.xml", coverInXml(data));
  }
  function uploadXml(ev: React.ChangeEvent<HTMLInputElement>) {
    const file = (ev.target as FileEventTarget).files[0];
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target) {
        const xml = event.target.result as string;
        const json = coverOutXml(xml);
        const newJson = transformJson(json);
        console.log("1--upload", {
          xml,
          json,
          newJson,
        });
        lf.render(newJson);
      }
    };
    reader.readAsText(file);
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
