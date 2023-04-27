import React, { useEffect, useRef, useState } from "react";
import BpmnIo from "../components/Io/index.tsx";
import LogicFlow from "@logicflow/core";
import "./index.css";
import UserTask from "../components/UserTask/index.tsx";
import Square from "../components/Square/index.tsx";
import {
  BpmnElement,
  DndPanel,
  Snapshot,
  BpmnAdapter,
  // BpmnXmlAdapter,
} from "@logicflow/extension";
import CustomEdge from "../components/CustomEdge/index.tsx";
import CustomHtml from "../components/CustomHtml/index.tsx";
import BpmnPattern from "../components/Pattern/index.tsx";

interface Props {}

const config = {
  stopScrollGraph: true,
  stopZoomGraph: true,
};

const data = {
  nodes: [
    {
      id: 12,
      type: "bpmn:userTask",
      x: 386,
      y: 59,
      // properties: {},
      baseType: "node",
      text: { x: 386, y: 59, value: "UserTask" },
    },
    {
      id: 14,
      type: "bpmn:userTask2",
      x: 500,
      y: 100,
      baseType: "node",
      text: "userTask2",
    },
    {
      id: 70,
      type: "customHtml",
      x: 1500,
      y: 300,
      text: "这是自定义的HTML",
    },
    {
      id: 10,
      type: "square2",
      x: 1000,
      y: 100,
      text: "正方形",
      properties: {
        isUser: true,
      },
    },
    {
      id: 20,
      type: "circle",
      x: 1200,
      y: 200,
      text: "圆形",
    },
    {
      id: 30,
      type: "diamond",
      x: 1000,
      y: 300,
      text: "其他节点",
    },
    {
      id: 1,
      type: "rect",
      x: 100,
      y: 100,
      text: "节点1",
    },
    {
      id: 2,
      type: "circle",
      x: 300,
      y: 200,
      text: "节点2",
    },
  ],
  edges: [
    {
      sourceNodeId: 1,
      targetNodeId: 2,
      type: "polyline",
      text: "连线",
    },
    {
      type: "CustomEdge",
      sourceNodeId: 10,
      targetNodeId: 30,
    },
  ],
};

const Test1: React.FC<Props> = () => {
  const [lf, setLf] = useState<LogicFlow>({} as LogicFlow);
  
  useEffect(() => {
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector("#graph") as HTMLElement,
      plugins: [DndPanel, Snapshot, BpmnElement],
    });
    lf.register(UserTask);
    lf.register(Square);
    lf.register(CustomHtml);
    lf.register(CustomEdge);

    // lf.setPatternItems([
    //   {
    //     type: "circle",
    //     text: "开始",
    //     label: "圆",
    //     icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==",
    //   },
    //   {
    //     type: "rect",
    //     label: "矩形",
    //     icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==",
    //   },
    // ]);

    setLf(lf);
    lf.render(data);

    console.log("1--render");
  }, []);

  const addNode = (type: string) => {
    lf?.dnd?.startDrag({
      type: type,
    });
  };

  return (
    <div className="bpmn-example-container">
      <div id="graph" className="viewport"></div>
      <BpmnPattern lf={lf} />
      <BpmnIo lf={lf} />
    </div>
  );
};

export default Test1;
