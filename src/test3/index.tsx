import React, { useEffect, useState } from "react";
import LogicFlow from "@logicflow/core";
import {
  Snapshot,
  DndPanel,
  lfJson2Xml,
  BpmnElement,
} from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import { download } from "../utils";

interface Props {}

const Test3: React.FC<Props> = () => {
  const [lf, setLf] = useState<LogicFlow>();

  useEffect(() => {
    const lf = new LogicFlow({
      container: document.querySelector("#graph")!,
      grid: true,
      plugins: [DndPanel, BpmnElement, Snapshot],
    });

    lf.setPatternItems([
      {
        type: "circle",
        text: "开始",
        label: "圆",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==",
      },
      {
        type: "rect",
        label: "矩形",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==",
      },
    ]);

    lf.render({
      nodes: [
        {
          id: "node_1",
          type: "rect",
          x: 100,
          y: 200,
        },
        {
          id: "node_2",
          type: "circle",
          x: 300,
          y: 150,
        },
        {
          id: 12,
          type: "bpmn:userTask",
          x: 386,
          y: 59,
          properties: {},
          // baseType: "node",
          text: "UserTask",
        },
      ],
      edges: [
        {
          sourceNodeId: "node_1",
          targetNodeId: "node_2",
          type: "polyline",
        },
      ],
    });

    setLf(lf);

    initEvent(lf);
  }, []);

  const initEvent = (lf: LogicFlow) => {
    console.log("1--lf");
    document
      .querySelector("#js_download-img")
      ?.addEventListener("click", () => {
        lf?.getSnapshot();
      });

    document
      .querySelector("#js_download-xml")
      ?.addEventListener("click", () => {
        const data = lf?.getGraphData();
        download("logicflow.xml", lfJson2Xml(data));
      });

    document.querySelector("#js_getBase64")?.addEventListener("click", () => {
      lf?.getSnapshotBase64()?.then(({ data, width, height }) => {
        console.log(data);
      });
    });
  };

  return (
    <>
      <div id="graph" className="viewport"></div>
      <div className="button-wrapper">
        <button id="js_download-img">下载快照</button>
        <button id="js_download-xml">下载xml</button>
        <button id="js_getBase64">获取base64</button>
      </div>
    </>
  );
};

export default Test3;
