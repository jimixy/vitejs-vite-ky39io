import styles from './index.module.less';
/**
 * 节点类型
 */
export const nodeList = [
	{
		type: 'bpmn:startEvent',
		text: '开始',
		shape: <div className={styles.customPatternStart} />,
	},
	{
		type: 'bpmn:userTask',
		text: '用户任务',
		shape: <div className={styles.customPatternUser} />,
	},
	{
		type: 'bpmn:xorGateway',
		text: '互斥网关',
		shape: <div className={styles.customPatternXorGateway} />,
	},
	{
		type: 'bpmn:parallelGateway',
		text: '并行网关',
		shape: <div className={styles.customPatternParallelGateway} />,
	},
	{
		type: 'bpmn:endEvent',
		text: '结束',
		shape: <div className={styles.customPatternEnd} />,
	},
];
/**
 * 权限列表
 */
export const roleOptions = [
	{ label: '普通用户', value: 'user' },
	{ label: 'CS审核员', value: 'cs' },
	{ label: 'RO审核员', value: 'ro' },
	{ label: '管理员', value: 'admin' },
	{ label: '超管', value: 'superAdmin' },
];
/**
 * 模式
 */
export const modeOptions = [
	{ label: '编辑', value: 'edit' },
	{ label: '预览', value: 'preview' },
	// { label: "执行", value: "running" },
];
/**
 * 节点状态
 */
export const statusOptions = [
	{ label: '待执行', value: 'pending' },
	{ label: '执行中', value: 'running' },
	{ label: '失败', value: 'failed' },
	{ label: '成功', value: 'success' },
];

export const initXml = `<?xml version="1.0" encoding="UTF-8" ?>

<bpmn:definitions id="Definitions_39o8a4k" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://logic-flow.org" exporter="logicflow" exporterVersion="1.2.0">	
<bpmn:process isExecutable="true" id="Process_17niq8l">	
<bpmn:startEvent id="Event_3n1c79t" name="开始">	
  <bpmn:outgoing>Flow_08741tv</bpmn:outgoing>	
</bpmn:startEvent>	
  <bpmn:parallelGateway id="Gateway_2fsqme1" name="并行网关">	
    <bpmn:incoming>Flow_11l40hk</bpmn:incoming>	
      <bpmn:outgoing>Flow_3uks5jd</bpmn:outgoing>	
      <bpmn:outgoing>Flow_17597bt</bpmn:outgoing>	
  </bpmn:parallelGateway>	
  <bpmn:parallelGateway id="Gateway_0mju0qf" name="并行网关">	
      <bpmn:incoming>Flow_0tum0be</bpmn:incoming>	
      <bpmn:incoming>Flow_25d3g0a</bpmn:incoming>	
    <bpmn:outgoing>Flow_00equ20</bpmn:outgoing>	
  </bpmn:parallelGateway>	
<bpmn:xorGateway id="Gateway_2c3huvv" name="互斥网关">	
  <bpmn:incoming>Flow_0641r5c</bpmn:incoming>	
    <bpmn:outgoing>Flow_3f96aub</bpmn:outgoing>	
    <bpmn:outgoing>Flow_1m17d5l</bpmn:outgoing>	
</bpmn:xorGateway>	
  <bpmn:userTask id="Activity_2qqf792" name="审核员1" role="cs">	
    <bpmn:incoming>Flow_3uks5jd</bpmn:incoming>	
      <bpmn:outgoing>Flow_0tum0be</bpmn:outgoing>	
      <bpmn:outgoing>Flow_3dsi7hd</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_2okc1si" name="发起任务" role="user">	
    <bpmn:incoming>Flow_08741tv</bpmn:incoming>	
    <bpmn:outgoing>Flow_11l40hk</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_1a0hqeh" name="审核员2" role="cs">	
    <bpmn:incoming>Flow_17597bt</bpmn:incoming>	
      <bpmn:outgoing>Flow_25d3g0a</bpmn:outgoing>	
      <bpmn:outgoing>Flow_1ednec1</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_3n03k57" name="复审1" role="ro">	
    <bpmn:incoming>Flow_00equ20</bpmn:incoming>	
      <bpmn:outgoing>Flow_0641r5c</bpmn:outgoing>	
      <bpmn:outgoing>Flow_3dmagmb</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_2maunbq" name="管理员1">	
      <role>admin</role>	
      <role>superAdmin</role>	
    <bpmn:incoming>Flow_3f96aub</bpmn:incoming>	
    <bpmn:outgoing>Flow_03nv0st</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_31pb5h4" name="管理员2">	
      <role>admin</role>	
      <role>superAdmin</role>	
    <bpmn:incoming>Flow_1m17d5l</bpmn:incoming>	
    <bpmn:outgoing>Flow_0lb2fe4</bpmn:outgoing>	
  </bpmn:userTask>	
<bpmn:endEvent id="Event_2jv3bfq" name="结束">	
    <bpmn:incoming>Flow_0lb2fe4</bpmn:incoming>	
    <bpmn:incoming>Flow_03nv0st</bpmn:incoming>	
    <bpmn:incoming>Flow_3dmagmb</bpmn:incoming>	
    <bpmn:incoming>Flow_1ednec1</bpmn:incoming>	
    <bpmn:incoming>Flow_3dsi7hd</bpmn:incoming>	
</bpmn:endEvent>	
  <bpmn:sequenceFlow id="Flow_08741tv" sourceRef="Event_3n1c79t" targetRef="Activity_2okc1si" />	
  <bpmn:sequenceFlow id="Flow_11l40hk" sourceRef="Activity_2okc1si" targetRef="Gateway_2fsqme1" />	
  <bpmn:sequenceFlow id="Flow_3uks5jd" sourceRef="Gateway_2fsqme1" targetRef="Activity_2qqf792" />	
  <bpmn:sequenceFlow id="Flow_0641r5c" sourceRef="Activity_3n03k57" targetRef="Gateway_2c3huvv" name="通过" />	
  <bpmn:sequenceFlow id="Flow_3f96aub" sourceRef="Gateway_2c3huvv" targetRef="Activity_2maunbq" />	
  <bpmn:sequenceFlow id="Flow_1m17d5l" sourceRef="Gateway_2c3huvv" targetRef="Activity_31pb5h4" />	
  <bpmn:sequenceFlow id="Flow_0lb2fe4" sourceRef="Activity_31pb5h4" targetRef="Event_2jv3bfq" />	
  <bpmn:sequenceFlow id="Flow_03nv0st" sourceRef="Activity_2maunbq" targetRef="Event_2jv3bfq" name="通过/不通过" />	
  <bpmn:sequenceFlow id="Flow_3dmagmb" sourceRef="Activity_3n03k57" targetRef="Event_2jv3bfq" name="不通过" />	
  <bpmn:sequenceFlow id="Flow_00equ20" sourceRef="Gateway_0mju0qf" targetRef="Activity_3n03k57" />	
  <bpmn:sequenceFlow id="Flow_0tum0be" sourceRef="Activity_2qqf792" targetRef="Gateway_0mju0qf" name="通过" />	
  <bpmn:sequenceFlow id="Flow_17597bt" sourceRef="Gateway_2fsqme1" targetRef="Activity_1a0hqeh" />	
  <bpmn:sequenceFlow id="Flow_25d3g0a" sourceRef="Activity_1a0hqeh" targetRef="Gateway_0mju0qf" name="通过" />	
  <bpmn:sequenceFlow id="Flow_1ednec1" sourceRef="Activity_1a0hqeh" targetRef="Event_2jv3bfq" name="不通过" />	
  <bpmn:sequenceFlow id="Flow_3dsi7hd" sourceRef="Activity_2qqf792" targetRef="Event_2jv3bfq" name="不通过" />	
</bpmn:process>	
<bpmndi:BPMNDiagram id="BPMNDiagram_1">	
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_17niq8l">	
    <bpmndi:BPMNEdge id="Flow_08741tv_di" bpmnElement="Flow_08741tv">	
        <di:waypoint x="198" y="240" />	
        <di:waypoint x="228" y="240" />	
        <di:waypoint x="228" y="240" />	
        <di:waypoint x="220" y="240" />	
        <di:waypoint x="220" y="240" />	
        <di:waypoint x="250" y="240" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_11l40hk_di" bpmnElement="Flow_11l40hk">	
        <di:waypoint x="350" y="240" />	
        <di:waypoint x="380" y="240" />	
        <di:waypoint x="380" y="240" />	
        <di:waypoint x="345" y="240" />	
        <di:waypoint x="345" y="240" />	
        <di:waypoint x="375" y="240" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_3uks5jd_di" bpmnElement="Flow_3uks5jd">	
        <di:waypoint x="425" y="240" />	
        <di:waypoint x="480" y="240" />	
        <di:waypoint x="480" y="120" />	
        <di:waypoint x="510" y="120" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_0641r5c_di" bpmnElement="Flow_0641r5c">	
        <di:waypoint x="790" y="240" />	
        <di:waypoint x="820" y="240" />	
        <di:waypoint x="820" y="240" />	
        <di:waypoint x="805" y="240" />	
        <di:waypoint x="805" y="240" />	
        <di:waypoint x="835" y="240" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="801" y="233" width="20" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_3f96aub_di" bpmnElement="Flow_3f96aub">	
        <di:waypoint x="885" y="240" />	
        <di:waypoint x="920" y="240" />	
        <di:waypoint x="920" y="120" />	
        <di:waypoint x="950" y="120" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_1m17d5l_di" bpmnElement="Flow_1m17d5l">	
        <di:waypoint x="885" y="240" />	
        <di:waypoint x="920" y="240" />	
        <di:waypoint x="920" y="380" />	
        <di:waypoint x="950" y="380" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_0lb2fe4_di" bpmnElement="Flow_0lb2fe4">	
        <di:waypoint x="1050" y="380" />	
        <di:waypoint x="1160" y="380" />	
        <di:waypoint x="1160" y="258" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_03nv0st_di" bpmnElement="Flow_03nv0st">	
        <di:waypoint x="1050" y="120" />	
        <di:waypoint x="1160" y="120" />	
        <di:waypoint x="1160" y="222" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="1074" y="110" width="60" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_3dmagmb_di" bpmnElement="Flow_3dmagmb">	
        <di:waypoint x="740" y="280" />	
        <di:waypoint x="740" y="310" />	
        <di:waypoint x="1160" y="310" />	
        <di:waypoint x="1160" y="258" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="948" y="302" width="30" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_00equ20_di" bpmnElement="Flow_00equ20">	
        <di:waypoint x="665" y="240" />	
        <di:waypoint x="695" y="240" />	
        <di:waypoint x="695" y="240" />	
        <di:waypoint x="660" y="240" />	
        <di:waypoint x="660" y="240" />	
        <di:waypoint x="690" y="240" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_0tum0be_di" bpmnElement="Flow_0tum0be">	
        <di:waypoint x="610" y="120" />	
        <di:waypoint x="640" y="120" />	
        <di:waypoint x="640" y="120" />	
        <di:waypoint x="640" y="185" />	
        <di:waypoint x="640" y="215" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="630" y="151" width="20" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_17597bt_di" bpmnElement="Flow_17597bt">	
        <di:waypoint x="425" y="240" />	
        <di:waypoint x="480" y="240" />	
        <di:waypoint x="480" y="360" />	
        <di:waypoint x="510" y="360" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_25d3g0a_di" bpmnElement="Flow_25d3g0a">	
        <di:waypoint x="610" y="360" />	
        <di:waypoint x="640" y="360" />	
        <di:waypoint x="640" y="360" />	
        <di:waypoint x="640" y="295" />	
        <di:waypoint x="640" y="265" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="630" y="325" width="20" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_1ednec1_di" bpmnElement="Flow_1ednec1">	
        <di:waypoint x="560" y="400" />	
        <di:waypoint x="560" y="430" />	
        <di:waypoint x="1160" y="430" />	
        <di:waypoint x="1160" y="258" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="742" y="423" width="30" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_3dsi7hd_di" bpmnElement="Flow_3dsi7hd">	
        <di:waypoint x="560" y="80" />	
        <di:waypoint x="560" y="50" />	
        <di:waypoint x="1160" y="50" />	
        <di:waypoint x="1160" y="222" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="761" y="43" width="30" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNShape id="Event_3n1c79t_di" bpmnElement="Event_3n1c79t">	
      <dc:Bounds x="160" y="220" width="40" height="40" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="170" y="273" width="20" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Gateway_2fsqme1_di" bpmnElement="Gateway_2fsqme1">	
      <dc:Bounds x="375" y="215" width="50" height="50" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="380" y="273" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Gateway_0mju0qf_di" bpmnElement="Gateway_0mju0qf">	
      <dc:Bounds x="615" y="215" width="50" height="50" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="620" y="273" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Gateway_2c3huvv_di" bpmnElement="Gateway_2c3huvv">	
      <dc:Bounds x="835" y="215" width="50" height="50" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="840" y="273" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_2qqf792_di" bpmnElement="Activity_2qqf792">	
      <dc:Bounds x="510" y="80" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="540" y="113" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_2okc1si_di" bpmnElement="Activity_2okc1si">	
      <dc:Bounds x="250" y="200" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="280" y="233" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_1a0hqeh_di" bpmnElement="Activity_1a0hqeh">	
      <dc:Bounds x="510" y="320" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="540" y="353" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_3n03k57_di" bpmnElement="Activity_3n03k57">	
      <dc:Bounds x="690" y="200" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="725" y="233" width="30" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_2maunbq_di" bpmnElement="Activity_2maunbq">	
      <dc:Bounds x="950" y="80" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="980" y="113" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_31pb5h4_di" bpmnElement="Activity_31pb5h4">	
      <dc:Bounds x="950" y="340" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="980" y="373" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Event_2jv3bfq_di" bpmnElement="Event_2jv3bfq">	
      <dc:Bounds x="1140" y="220" width="40" height="40" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="1150" y="273" width="20" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
</bpmndi:BPMNPlane>	
</bpmndi:BPMNDiagram>	
</bpmn:definitions>`;
