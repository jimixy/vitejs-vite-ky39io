import styles from "./index.module.less";
/**
 * 节点类型
 */
export const nodeList = [
	{
		type: "bpmn:startEvent",
		text: "开始",
		shape: <div className={styles.customPatternStart} />,
	},
	{
		type: "bpmn:userTask",
		text: "用户任务",
		shape: <div className={styles.customPatternUser} />,
	},
	{
		type: "bpmn:xorGateway",
		text: "互斥网关",
		shape: <div className={styles.customPatternXorGateway} />,
	},
	{
		type: "bpmn:parallelGateway",
		text: "并行网关",
		shape: <div className={styles.customPatternParallelGateway} />,
	},
	{
		type: "bpmn:endEvent",
		text: "结束",
		shape: <div className={styles.customPatternEnd} />,
	},
];
/**
 * 权限列表
 */
export const roleOptions = [
	{ label: "普通用户", value: "user" },
	{ label: "CS审核员", value: "cs" },
	{ label: "RO审核员", value: "ro" },
	{ label: "管理员", value: "admin" },
	{ label: "超管", value: "superAdmin" },
];
/**
 * 模式
 */
export const modeOptions = [
	{ label: "编辑", value: "edit" },
	{ label: "预览", value: "preview" },
	// { label: "执行", value: "running" },
];
/**
 * 节点状态
 */
export const statusOptions = [
	{ label: "待执行", value: "pending" },
	{ label: "执行中", value: "running" },
	{ label: "失败", value: "failed" },
	{ label: "成功", value: "success" },
];

export const initXml = `<?xml version="1.0" encoding="UTF-8" ?>
<bpmn:definitions id="Definitions_0nbs7de" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://logic-flow.org" exporter="logicflow" exporterVersion="1.2.0">	
  <bpmn:process isExecutable="true" id="Process_2iilb0h">	
    <bpmn:startEvent id="Event_3n1c79t" name="开始">	
      <bpmn:outgoing>Flow_08741tv</bpmn:outgoing>	
    </bpmn:startEvent>	
      <bpmn:parallelGateway id="Gateway_2fsqme1" name="并行网关">	
        <bpmn:incoming>Flow_11l40hk</bpmn:incoming>	
          <bpmn:outgoing>Flow_3uks5jd</bpmn:outgoing>	
          <bpmn:outgoing>Flow_17597bt</bpmn:outgoing>	
      </bpmn:parallelGateway>	
      <bpmn:parallelGateway id="Gateway_0mju0qf" name="并行网关">	
          <bpmn:incoming>Flow_037juhv</bpmn:incoming>	
          <bpmn:incoming>Flow_0l3imfn</bpmn:incoming>	
        <bpmn:outgoing>Flow_00equ20</bpmn:outgoing>	
      </bpmn:parallelGateway>	
    <bpmn:xorGateway id="Gateway_2c3huvv" name="互斥网关">	
      <bpmn:incoming>Flow_0641r5c</bpmn:incoming>	
        <bpmn:outgoing>Flow_1g2hmgt</bpmn:outgoing>	
        <bpmn:outgoing>Flow_1rcdh42</bpmn:outgoing>	
    </bpmn:xorGateway>	
      <bpmn:userTask id="Activity_2qqf792" name="审核员1" role="cs">	
        <bpmn:incoming>Flow_3uks5jd</bpmn:incoming>	
          <bpmn:outgoing>Flow_3dsi7hd</bpmn:outgoing>	
          <bpmn:outgoing>Flow_037juhv</bpmn:outgoing>	
      </bpmn:userTask>	
      <bpmn:userTask id="Activity_2okc1si" name="发起任务" role="user">	
        <bpmn:incoming>Flow_08741tv</bpmn:incoming>	
        <bpmn:outgoing>Flow_11l40hk</bpmn:outgoing>	
      </bpmn:userTask>	
      <bpmn:userTask id="Activity_1a0hqeh" name="审核员2" role="cs">	
        <bpmn:incoming>Flow_17597bt</bpmn:incoming>	
          <bpmn:outgoing>Flow_1ednec1</bpmn:outgoing>	
          <bpmn:outgoing>Flow_0l3imfn</bpmn:outgoing>	
      </bpmn:userTask>	
      <bpmn:userTask id="Activity_3n03k57" name="复审1" role="ro">	
        <bpmn:incoming>Flow_00equ20</bpmn:incoming>	
        <bpmn:outgoing>Flow_0641r5c</bpmn:outgoing>	
      </bpmn:userTask>	
      <bpmn:userTask id="Activity_2maunbq" name="管理员1">	
          <role>admin</role>	
          <role>superAdmin</role>	
        <bpmn:incoming>Flow_1g2hmgt</bpmn:incoming>	
        <bpmn:outgoing>Flow_03nv0st</bpmn:outgoing>	
      </bpmn:userTask>	
      <bpmn:userTask id="Activity_31pb5h4" name="管理员2">	
          <role>admin</role>	
          <role>superAdmin</role>	
        <bpmn:incoming>Flow_1rcdh42</bpmn:incoming>	
        <bpmn:outgoing>Flow_0lb2fe4</bpmn:outgoing>	
      </bpmn:userTask>	
    <bpmn:endEvent id="Event_2jv3bfq" name="结束">	
        <bpmn:incoming>Flow_0lb2fe4</bpmn:incoming>	
        <bpmn:incoming>Flow_03nv0st</bpmn:incoming>	
        <bpmn:incoming>Flow_1ednec1</bpmn:incoming>	
        <bpmn:incoming>Flow_3dsi7hd</bpmn:incoming>	
    </bpmn:endEvent>	
      <bpmn:sequenceFlow id="Flow_08741tv" sourceRef="Event_3n1c79t" targetRef="Activity_2okc1si" />	
      <bpmn:sequenceFlow id="Flow_11l40hk" sourceRef="Activity_2okc1si" targetRef="Gateway_2fsqme1" />	
      <bpmn:sequenceFlow id="Flow_3uks5jd" sourceRef="Gateway_2fsqme1" targetRef="Activity_2qqf792" />	
      <bpmn:sequenceFlow id="Flow_0641r5c" sourceRef="Activity_3n03k57" targetRef="Gateway_2c3huvv" name="通过" />	
      <bpmn:sequenceFlow id="Flow_0lb2fe4" sourceRef="Activity_31pb5h4" targetRef="Event_2jv3bfq" name="通过/不通过" />	
      <bpmn:sequenceFlow id="Flow_03nv0st" sourceRef="Activity_2maunbq" targetRef="Event_2jv3bfq" name="通过/不通过" />	
      <bpmn:sequenceFlow id="Flow_00equ20" sourceRef="Gateway_0mju0qf" targetRef="Activity_3n03k57" />	
      <bpmn:sequenceFlow id="Flow_17597bt" sourceRef="Gateway_2fsqme1" targetRef="Activity_1a0hqeh" />	
      <bpmn:sequenceFlow id="Flow_1ednec1" sourceRef="Activity_1a0hqeh" targetRef="Event_2jv3bfq" name="不通过" />	
      <bpmn:sequenceFlow id="Flow_3dsi7hd" sourceRef="Activity_2qqf792" targetRef="Event_2jv3bfq" name="不通过" />	
      <bpmn:sequenceFlow id="Flow_037juhv" sourceRef="Activity_2qqf792" targetRef="Gateway_0mju0qf" name="通过" />	
      <bpmn:sequenceFlow id="Flow_0l3imfn" sourceRef="Activity_1a0hqeh" targetRef="Gateway_0mju0qf" name="通过" />	
      <bpmn:sequenceFlow id="Flow_1g2hmgt" sourceRef="Gateway_2c3huvv" targetRef="Activity_2maunbq" />	
      <bpmn:sequenceFlow id="Flow_1rcdh42" sourceRef="Gateway_2c3huvv" targetRef="Activity_31pb5h4" />	
  </bpmn:process>	
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">	
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_2iilb0h">	
        <bpmndi:BPMNEdge id="Flow_08741tv_di" bpmnElement="Flow_08741tv">	
            <di:waypoint x="408" y="280" />	
            <di:waypoint x="438" y="280" />	
            <di:waypoint x="438" y="280" />	
            <di:waypoint x="430" y="280" />	
            <di:waypoint x="430" y="280" />	
            <di:waypoint x="460" y="280" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_11l40hk_di" bpmnElement="Flow_11l40hk">	
            <di:waypoint x="560" y="280" />	
            <di:waypoint x="590" y="280" />	
            <di:waypoint x="590" y="280" />	
            <di:waypoint x="575" y="280" />	
            <di:waypoint x="575" y="280" />	
            <di:waypoint x="605" y="280" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_3uks5jd_di" bpmnElement="Flow_3uks5jd">	
            <di:waypoint x="630" y="255" />	
            <di:waypoint x="630" y="140" />	
            <di:waypoint x="720" y="140" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0641r5c_di" bpmnElement="Flow_0641r5c">	
            <di:waypoint x="1020" y="280" />	
            <di:waypoint x="1085" y="280" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1036" y="273" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0lb2fe4_di" bpmnElement="Flow_0lb2fe4">	
            <di:waypoint x="1260" y="350" />	
            <di:waypoint x="1374" y="350" />	
            <di:waypoint x="1374" y="297.54992877478423" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1289" y="343" width="60" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_03nv0st_di" bpmnElement="Flow_03nv0st">	
            <di:waypoint x="1260" y="208" />	
            <di:waypoint x="1369" y="208" />	
            <di:waypoint x="1369" y="262.0277992443886" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1284.5" y="201" width="60" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_00equ20_di" bpmnElement="Flow_00equ20">	
            <di:waypoint x="875" y="280" />	
            <di:waypoint x="905" y="280" />	
            <di:waypoint x="905" y="280" />	
            <di:waypoint x="890" y="280" />	
            <di:waypoint x="890" y="280" />	
            <di:waypoint x="920" y="280" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_17597bt_di" bpmnElement="Flow_17597bt">	
            <di:waypoint x="630" y="305" />	
            <di:waypoint x="630" y="430" />	
            <di:waypoint x="720" y="430" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_1ednec1_di" bpmnElement="Flow_1ednec1">	
            <di:waypoint x="820" y="430" />	
            <di:waypoint x="1373" y="430" />	
            <di:waypoint x="1373" y="297.74823934929884" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1081.5" y="423" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_3dsi7hd_di" bpmnElement="Flow_3dsi7hd">	
            <di:waypoint x="820" y="140" />	
            <di:waypoint x="1369" y="140" />	
            <di:waypoint x="1369" y="262.0277992443886" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1079.5" y="133" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_037juhv_di" bpmnElement="Flow_037juhv">	
            <di:waypoint x="770" y="180" />	
            <di:waypoint x="770" y="280" />	
            <di:waypoint x="825" y="280" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="760" y="218" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0l3imfn_di" bpmnElement="Flow_0l3imfn">	
            <di:waypoint x="770" y="390" />	
            <di:waypoint x="770" y="335" />	
            <di:waypoint x="771" y="335" />	
            <di:waypoint x="771" y="280" />	
            <di:waypoint x="825" y="280" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="760" y="341.5" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_1g2hmgt_di" bpmnElement="Flow_1g2hmgt">	
            <di:waypoint x="1135" y="280" />	
            <di:waypoint x="1165" y="280" />	
            <di:waypoint x="1210" y="280" />	
            <di:waypoint x="1210" y="280" />	
            <di:waypoint x="1210" y="250" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_1rcdh42_di" bpmnElement="Flow_1rcdh42">	
            <di:waypoint x="1135" y="280" />	
            <di:waypoint x="1165" y="280" />	
            <di:waypoint x="1210" y="280" />	
            <di:waypoint x="1210" y="280" />	
            <di:waypoint x="1210" y="310" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNShape id="Event_3n1c79t_di" bpmnElement="Event_3n1c79t">	
          <dc:Bounds x="370" y="260" width="40" height="40" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="380" y="313" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Gateway_2fsqme1_di" bpmnElement="Gateway_2fsqme1">	
          <dc:Bounds x="605" y="255" width="50" height="50" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="610" y="313" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Gateway_0mju0qf_di" bpmnElement="Gateway_0mju0qf">	
          <dc:Bounds x="825" y="255" width="50" height="50" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="830" y="313" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Gateway_2c3huvv_di" bpmnElement="Gateway_2c3huvv">	
          <dc:Bounds x="1085" y="255" width="50" height="50" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1090" y="313" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_2qqf792_di" bpmnElement="Activity_2qqf792">	
          <dc:Bounds x="720" y="100" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="750" y="133" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_2okc1si_di" bpmnElement="Activity_2okc1si">	
          <dc:Bounds x="460" y="240" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="490" y="273" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_1a0hqeh_di" bpmnElement="Activity_1a0hqeh">	
          <dc:Bounds x="720" y="390" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="750" y="423" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_3n03k57_di" bpmnElement="Activity_3n03k57">	
          <dc:Bounds x="920" y="240" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="955" y="273" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_2maunbq_di" bpmnElement="Activity_2maunbq">	
          <dc:Bounds x="1160" y="170" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1190" y="203" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_31pb5h4_di" bpmnElement="Activity_31pb5h4">	
          <dc:Bounds x="1160" y="310" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1190" y="343" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Event_2jv3bfq_di" bpmnElement="Event_2jv3bfq">	
          <dc:Bounds x="1350" y="260" width="40" height="40" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1360" y="313" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
    </bpmndi:BPMNPlane>	
  </bpmndi:BPMNDiagram>	
</bpmn:definitions>`;
