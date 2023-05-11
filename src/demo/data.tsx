import styles from "./index.module.less";
/**
 * 节点类型
 */
export const nodeList = [
	{
		type: "startEvent",
		text: "开始",
		shape: <div className={styles.customPatternStart} />,
	},
	{
		type: "userTask",
		text: "用户任务",
		shape: <div className={styles.customPatternUser} />,
	},
	{
		type: "xorGateway",
		text: "互斥网关",
		shape: <div className={styles.customPatternXorGateway} />,
	},
	{
		type: "parallelGateway",
		text: "并行网关",
		shape: <div className={styles.customPatternParallelGateway} />,
	},
	{
		type: "endEvent",
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
<definitions id="Definitions_37c99b6" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://logic-flow.org" exporter="logicflow" exporterVersion="1.2.0">	
  <process isExecutable="true" id="Process_1rrg0gs">	
    <startEvent id="Event_3obpiq8" name="开始">	
      <outgoing>Flow_3u9tuo1</outgoing>	
    </startEvent>	
      <userTask id="Activity_23tssal" name="发起任务" role="user">	
        <incoming>Flow_3u9tuo1</incoming>	
        <outgoing>Flow_169b6i3</outgoing>	
      </userTask>	
      <userTask id="Activity_3eulqki" name="审核员2" status="running" role="cs">	
        <incoming>Flow_1tkumhn</incoming>	
          <outgoing>Flow_0q19eb5</outgoing>	
          <outgoing>Flow_0gvd1nm</outgoing>	
      </userTask>	
      <userTask id="Activity_2sf4qai" name="审核员1" status="running" role="cs">	
        <incoming>Flow_30gbb5m</incoming>	
          <outgoing>Flow_3kpbdng</outgoing>	
          <outgoing>Flow_01laeg8</outgoing>	
      </userTask>	
      <userTask id="Activity_1fb5tsl" name="复审员" role="ro">	
        <incoming>Flow_3sddur2</incoming>	
          <outgoing>Flow_1jpvj66</outgoing>	
          <outgoing>Flow_0mf89n2</outgoing>	
      </userTask>	
      <userTask id="Activity_1vkciji" name="管理员1">	
          <role>admin</role>	
          <role>superAdmin</role>	
        <incoming>Flow_06a0dt1</incoming>	
        <outgoing>Flow_3gjfk6h</outgoing>	
      </userTask>	
      <userTask id="Activity_16apojr" name="管理员1">	
          <role>admin</role>	
          <role>superAdmin</role>	
        <incoming>Flow_0aean2r</incoming>	
        <outgoing>Flow_11d6e2u</outgoing>	
      </userTask>	
      <parallelGateway id="Gateway_172b7fl" name="并行网关">	
        <incoming>Flow_169b6i3</incoming>	
          <outgoing>Flow_30gbb5m</outgoing>	
          <outgoing>Flow_1tkumhn</outgoing>	
      </parallelGateway>	
      <parallelGateway id="Gateway_0qhng9f" name="并行网关">	
          <incoming>Flow_3kpbdng</incoming>	
          <incoming>Flow_0q19eb5</incoming>	
        <outgoing>Flow_3sddur2</outgoing>	
      </parallelGateway>	
    <xorGateway id="Gateway_1qo1h9r" name="互斥网关">	
      <incoming>Flow_1jpvj66</incoming>	
        <outgoing>Flow_06a0dt1</outgoing>	
        <outgoing>Flow_0aean2r</outgoing>	
    </xorGateway>	
    <endEvent id="Event_1fmldbo" name="结束">	
        <incoming>Flow_3gjfk6h</incoming>	
        <incoming>Flow_0gvd1nm</incoming>	
        <incoming>Flow_01laeg8</incoming>	
        <incoming>Flow_0mf89n2</incoming>	
        <incoming>Flow_11d6e2u</incoming>	
    </endEvent>	
      <sequenceFlow id="Flow_3u9tuo1" sourceRef="Event_3obpiq8" targetRef="Activity_23tssal" />	
      <sequenceFlow id="Flow_30gbb5m" sourceRef="Gateway_172b7fl" targetRef="Activity_2sf4qai" />	
      <sequenceFlow id="Flow_1tkumhn" sourceRef="Gateway_172b7fl" targetRef="Activity_3eulqki" />	
      <sequenceFlow id="Flow_169b6i3" sourceRef="Activity_23tssal" targetRef="Gateway_172b7fl" />	
      <sequenceFlow id="Flow_3kpbdng" sourceRef="Activity_2sf4qai" targetRef="Gateway_0qhng9f" name="通过" />	
      <sequenceFlow id="Flow_0q19eb5" sourceRef="Activity_3eulqki" targetRef="Gateway_0qhng9f" name="通过" />	
      <sequenceFlow id="Flow_3sddur2" sourceRef="Gateway_0qhng9f" targetRef="Activity_1fb5tsl" name="通过" />	
      <sequenceFlow id="Flow_1jpvj66" sourceRef="Activity_1fb5tsl" targetRef="Gateway_1qo1h9r" name="通过" />	
      <sequenceFlow id="Flow_06a0dt1" sourceRef="Gateway_1qo1h9r" targetRef="Activity_1vkciji" />	
      <sequenceFlow id="Flow_0aean2r" sourceRef="Gateway_1qo1h9r" targetRef="Activity_16apojr" />	
      <sequenceFlow id="Flow_3gjfk6h" sourceRef="Activity_1vkciji" targetRef="Event_1fmldbo" name="通过/不通过" />	
      <sequenceFlow id="Flow_0gvd1nm" sourceRef="Activity_3eulqki" targetRef="Event_1fmldbo" name="不通过" />	
      <sequenceFlow id="Flow_01laeg8" sourceRef="Activity_2sf4qai" targetRef="Event_1fmldbo" name="不通过" />	
      <sequenceFlow id="Flow_0mf89n2" sourceRef="Activity_1fb5tsl" targetRef="Event_1fmldbo" name="不通过" />	
      <sequenceFlow id="Flow_11d6e2u" sourceRef="Activity_16apojr" targetRef="Event_1fmldbo" name="通过/不通过" />	
  </process>	
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">	
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1rrg0gs">	
        <bpmndi:BPMNEdge id="Flow_3u9tuo1_di" bpmnElement="Flow_3u9tuo1">	
            <di:waypoint x="338" y="270" />	
            <di:waypoint x="410" y="270" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_30gbb5m_di" bpmnElement="Flow_30gbb5m">	
            <di:waypoint x="600" y="245" />	
            <di:waypoint x="600" y="120" />	
            <di:waypoint x="660" y="120" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_1tkumhn_di" bpmnElement="Flow_1tkumhn">	
            <di:waypoint x="600" y="295" />	
            <di:waypoint x="600" y="430" />	
            <di:waypoint x="660" y="430" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_169b6i3_di" bpmnElement="Flow_169b6i3">	
            <di:waypoint x="510" y="270" />	
            <di:waypoint x="575" y="270" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_3kpbdng_di" bpmnElement="Flow_3kpbdng">	
            <di:waypoint x="760" y="120" />	
            <di:waypoint x="830" y="120" />	
            <di:waypoint x="830" y="245" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="820" y="175.5" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0q19eb5_di" bpmnElement="Flow_0q19eb5">	
            <di:waypoint x="760" y="430" />	
            <di:waypoint x="830" y="430" />	
            <di:waypoint x="830" y="295" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="820" y="355.5" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_3sddur2_di" bpmnElement="Flow_3sddur2">	
            <di:waypoint x="855" y="270" />	
            <di:waypoint x="885" y="270" />	
            <di:waypoint x="885" y="270" />	
            <di:waypoint x="880" y="270" />	
            <di:waypoint x="880" y="270" />	
            <di:waypoint x="910" y="270" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="860" y="263" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_1jpvj66_di" bpmnElement="Flow_1jpvj66">	
            <di:waypoint x="1010" y="270" />	
            <di:waypoint x="1040" y="270" />	
            <di:waypoint x="1040" y="270" />	
            <di:waypoint x="1035" y="270" />	
            <di:waypoint x="1035" y="270" />	
            <di:waypoint x="1065" y="270" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1015" y="263" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_06a0dt1_di" bpmnElement="Flow_06a0dt1">	
            <di:waypoint x="1115" y="270" />	
            <di:waypoint x="1150" y="270" />	
            <di:waypoint x="1150" y="180" />	
            <di:waypoint x="1180" y="180" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0aean2r_di" bpmnElement="Flow_0aean2r">	
            <di:waypoint x="1115" y="270" />	
            <di:waypoint x="1150" y="270" />	
            <di:waypoint x="1150" y="330" />	
            <di:waypoint x="1190" y="330" />	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_3gjfk6h_di" bpmnElement="Flow_3gjfk6h">	
            <di:waypoint x="1280" y="180" />	
            <di:waypoint x="1380" y="180" />	
            <di:waypoint x="1380" y="262" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1297" y="173" width="60" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0gvd1nm_di" bpmnElement="Flow_0gvd1nm">	
            <di:waypoint x="760" y="430" />	
            <di:waypoint x="1381" y="430" />	
            <di:waypoint x="1381" y="297.9722007556114" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1030.5" y="423" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_01laeg8_di" bpmnElement="Flow_01laeg8">	
            <di:waypoint x="760" y="120" />	
            <di:waypoint x="1380" y="120" />	
            <di:waypoint x="1380" y="262" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1030" y="113" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_0mf89n2_di" bpmnElement="Flow_0mf89n2">	
            <di:waypoint x="960" y="310" />	
            <di:waypoint x="960" y="387" />	
            <di:waypoint x="1380" y="387" />	
            <di:waypoint x="1380" y="298" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1155" y="380" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNEdge id="Flow_11d6e2u_di" bpmnElement="Flow_11d6e2u">	
            <di:waypoint x="1290" y="330" />	
            <di:waypoint x="1380" y="330" />	
            <di:waypoint x="1380" y="298" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1300" y="323" width="60" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNEdge>	
        <bpmndi:BPMNShape id="Event_3obpiq8_di" bpmnElement="Event_3obpiq8">	
          <dc:Bounds x="300" y="250" width="40" height="40" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="310" y="303" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_23tssal_di" bpmnElement="Activity_23tssal">	
          <dc:Bounds x="410" y="230" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="440" y="263" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_3eulqki_di" bpmnElement="Activity_3eulqki">	
          <dc:Bounds x="660" y="390" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="690" y="423" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_2sf4qai_di" bpmnElement="Activity_2sf4qai">	
          <dc:Bounds x="660" y="80" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="690" y="113" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_1fb5tsl_di" bpmnElement="Activity_1fb5tsl">	
          <dc:Bounds x="910" y="230" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="945" y="263" width="30" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_1vkciji_di" bpmnElement="Activity_1vkciji">	
          <dc:Bounds x="1180" y="140" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1210" y="173" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Activity_16apojr_di" bpmnElement="Activity_16apojr">	
          <dc:Bounds x="1190" y="290" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1220" y="323" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Gateway_172b7fl_di" bpmnElement="Gateway_172b7fl">	
          <dc:Bounds x="550" y="230" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="580" y="303" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Gateway_0qhng9f_di" bpmnElement="Gateway_0qhng9f">	
          <dc:Bounds x="780" y="230" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="810" y="303" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Gateway_1qo1h9r_di" bpmnElement="Gateway_1qo1h9r">	
          <dc:Bounds x="1040" y="230" width="100" height="80" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1070" y="303" width="40" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
        <bpmndi:BPMNShape id="Event_1fmldbo_di" bpmnElement="Event_1fmldbo">	
          <dc:Bounds x="1360" y="260" width="40" height="40" />	
          <bpmndi:BPMNLabel>	
            <dc:Bounds x="1370" y="313" width="20" height="14" />	
          </bpmndi:BPMNLabel>	
        </bpmndi:BPMNShape>	
    </bpmndi:BPMNPlane>	
  </bpmndi:BPMNDiagram>	
</definitions>`;
