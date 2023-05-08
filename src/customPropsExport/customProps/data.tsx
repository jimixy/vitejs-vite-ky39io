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
];
/**
 * 模式
 */
export const modeOptions = [
	{ label: '编辑', value: 'edit' },
	{ label: '预览', value: 'preview' },
	{ label: '执行', value: 'running' },
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

<bpmn:definitions id="Definitions_0rg38cl" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://logic-flow.org" exporter="logicflow" exporterVersion="1.2.0">	
<bpmn:process isExecutable="true" id="Process_1cnm2il">	
<bpmn:startEvent id="Event_3n1c79t" name="开始">	
  <bpmn:outgoing>Flow_08741tv</bpmn:outgoing>	
</bpmn:startEvent>	
<bpmn:parallelGateway id="Gateway_2fsqme1" name="并行网关">	
  <bpmn:incoming>Flow_11l40hk</bpmn:incoming>	
    <bpmn:outgoing>Flow_3uks5jd</bpmn:outgoing>	
    <bpmn:outgoing>Flow_08dqj1g</bpmn:outgoing>	
</bpmn:parallelGateway>	
<bpmn:xorGateway id="Gateway_2c3huvv" name="互斥网关">	
  <bpmn:incoming>Flow_0641r5c</bpmn:incoming>	
    <bpmn:outgoing>Flow_3f96aub</bpmn:outgoing>	
    <bpmn:outgoing>Flow_1m17d5l</bpmn:outgoing>	
</bpmn:xorGateway>	
  <bpmn:userTask id="Activity_2qqf792" name="用户任务">	
      <role>cs</role>	
    <bpmn:incoming>Flow_3uks5jd</bpmn:incoming>	
      <bpmn:outgoing>Flow_0nouvqj</bpmn:outgoing>	
      <bpmn:outgoing>Flow_2leq8k0</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_2okc1si" name="发起任务">	
      <role>user</role>	
    <bpmn:incoming>Flow_08741tv</bpmn:incoming>	
    <bpmn:outgoing>Flow_11l40hk</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_1a0hqeh" name="用户任务">	
      <role>cs</role>	
    <bpmn:incoming>Flow_08dqj1g</bpmn:incoming>	
      <bpmn:outgoing>Flow_284q9p9</bpmn:outgoing>	
      <bpmn:outgoing>Flow_2lfsic5</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_3n03k57" name="用户任务">	
      <role>ro</role>	
      <bpmn:incoming>Flow_0nouvqj</bpmn:incoming>	
      <bpmn:incoming>Flow_284q9p9</bpmn:incoming>	
      <bpmn:outgoing>Flow_0641r5c</bpmn:outgoing>	
      <bpmn:outgoing>Flow_3dmagmb</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_2maunbq" name="用户任务">	
      <role>admin</role>	
    <bpmn:incoming>Flow_3f96aub</bpmn:incoming>	
    <bpmn:outgoing>Flow_03nv0st</bpmn:outgoing>	
  </bpmn:userTask>	
  <bpmn:userTask id="Activity_31pb5h4" name="用户任务">	
      <role>admin</role>	
    <bpmn:incoming>Flow_1m17d5l</bpmn:incoming>	
    <bpmn:outgoing>Flow_0lb2fe4</bpmn:outgoing>	
  </bpmn:userTask>	
<bpmn:endEvent id="Event_2jv3bfq" name="结束">	
    <bpmn:incoming>Flow_0lb2fe4</bpmn:incoming>	
    <bpmn:incoming>Flow_03nv0st</bpmn:incoming>	
    <bpmn:incoming>Flow_2lfsic5</bpmn:incoming>	
    <bpmn:incoming>Flow_2leq8k0</bpmn:incoming>	
    <bpmn:incoming>Flow_3dmagmb</bpmn:incoming>	
</bpmn:endEvent>	
  <bpmn:sequenceFlow id="Flow_08741tv" sourceRef="Event_3n1c79t" targetRef="Activity_2okc1si" />	
  <bpmn:sequenceFlow id="Flow_11l40hk" sourceRef="Activity_2okc1si" targetRef="Gateway_2fsqme1" />	
  <bpmn:sequenceFlow id="Flow_3uks5jd" sourceRef="Gateway_2fsqme1" targetRef="Activity_2qqf792" />	
  <bpmn:sequenceFlow id="Flow_08dqj1g" sourceRef="Gateway_2fsqme1" targetRef="Activity_1a0hqeh" />	
  <bpmn:sequenceFlow id="Flow_0nouvqj" sourceRef="Activity_2qqf792" targetRef="Activity_3n03k57" />	
  <bpmn:sequenceFlow id="Flow_284q9p9" sourceRef="Activity_1a0hqeh" targetRef="Activity_3n03k57" />	
  <bpmn:sequenceFlow id="Flow_0641r5c" sourceRef="Activity_3n03k57" targetRef="Gateway_2c3huvv" name="通过" />	
  <bpmn:sequenceFlow id="Flow_3f96aub" sourceRef="Gateway_2c3huvv" targetRef="Activity_2maunbq" />	
  <bpmn:sequenceFlow id="Flow_1m17d5l" sourceRef="Gateway_2c3huvv" targetRef="Activity_31pb5h4" />	
  <bpmn:sequenceFlow id="Flow_0lb2fe4" sourceRef="Activity_31pb5h4" targetRef="Event_2jv3bfq" />	
  <bpmn:sequenceFlow id="Flow_03nv0st" sourceRef="Activity_2maunbq" targetRef="Event_2jv3bfq" name="通过/不通过" />	
  <bpmn:sequenceFlow id="Flow_2lfsic5" sourceRef="Activity_1a0hqeh" targetRef="Event_2jv3bfq" name="不通过" />	
  <bpmn:sequenceFlow id="Flow_2leq8k0" sourceRef="Activity_2qqf792" targetRef="Event_2jv3bfq" name="不通过" />	
  <bpmn:sequenceFlow id="Flow_3dmagmb" sourceRef="Activity_3n03k57" targetRef="Event_2jv3bfq" name="不通过" />	
</bpmn:process>	
<bpmndi:BPMNDiagram id="BPMNDiagram_1">	
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1cnm2il">	
    <bpmndi:BPMNEdge id="Flow_08741tv_di" bpmnElement="Flow_08741tv">	
        <di:waypoint x="258" y="240" />	
        <di:waypoint x="288" y="240" />	
        <di:waypoint x="288" y="240" />	
        <di:waypoint x="260" y="240" />	
        <di:waypoint x="260" y="240" />	
        <di:waypoint x="290" y="240" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_11l40hk_di" bpmnElement="Flow_11l40hk">	
        <di:waypoint x="390" y="240" />	
        <di:waypoint x="420" y="240" />	
        <di:waypoint x="420" y="240" />	
        <di:waypoint x="385" y="240" />	
        <di:waypoint x="385" y="240" />	
        <di:waypoint x="415" y="240" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_3uks5jd_di" bpmnElement="Flow_3uks5jd">	
        <di:waypoint x="465" y="240" />	
        <di:waypoint x="500" y="240" />	
        <di:waypoint x="500" y="120" />	
        <di:waypoint x="530" y="120" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_08dqj1g_di" bpmnElement="Flow_08dqj1g">	
        <di:waypoint x="465" y="240" />	
        <di:waypoint x="500" y="240" />	
        <di:waypoint x="500" y="380" />	
        <di:waypoint x="530" y="380" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_0nouvqj_di" bpmnElement="Flow_0nouvqj">	
        <di:waypoint x="630" y="120" />	
        <di:waypoint x="660" y="120" />	
        <di:waypoint x="660" y="240" />	
        <di:waypoint x="690" y="240" />	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_284q9p9_di" bpmnElement="Flow_284q9p9">	
        <di:waypoint x="630" y="380" />	
        <di:waypoint x="660" y="380" />	
        <di:waypoint x="660" y="240" />	
        <di:waypoint x="690" y="240" />	
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
    <bpmndi:BPMNEdge id="Flow_2lfsic5_di" bpmnElement="Flow_2lfsic5">	
        <di:waypoint x="580" y="420" />	
        <di:waypoint x="580" y="450" />	
        <di:waypoint x="1160" y="450" />	
        <di:waypoint x="1160" y="258" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="814" y="443" width="30" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNEdge>	
    <bpmndi:BPMNEdge id="Flow_2leq8k0_di" bpmnElement="Flow_2leq8k0">	
        <di:waypoint x="580" y="80" />	
        <di:waypoint x="580" y="50" />	
        <di:waypoint x="1160" y="50" />	
        <di:waypoint x="1160" y="222" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="808" y="43" width="30" height="14" />	
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
    <bpmndi:BPMNShape id="Event_3n1c79t_di" bpmnElement="Event_3n1c79t">	
      <dc:Bounds x="220" y="220" width="40" height="40" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="230" y="273" width="20" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Gateway_2fsqme1_di" bpmnElement="Gateway_2fsqme1">	
      <dc:Bounds x="415" y="215" width="50" height="50" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="420" y="273" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Gateway_2c3huvv_di" bpmnElement="Gateway_2c3huvv">	
      <dc:Bounds x="835" y="215" width="50" height="50" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="840" y="273" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_2qqf792_di" bpmnElement="Activity_2qqf792">	
      <dc:Bounds x="530" y="80" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="560" y="113" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_2okc1si_di" bpmnElement="Activity_2okc1si">	
      <dc:Bounds x="290" y="200" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="320" y="233" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_1a0hqeh_di" bpmnElement="Activity_1a0hqeh">	
      <dc:Bounds x="530" y="340" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="560" y="373" width="40" height="14" />	
      </bpmndi:BPMNLabel>	
    </bpmndi:BPMNShape>	
    <bpmndi:BPMNShape id="Activity_3n03k57_di" bpmnElement="Activity_3n03k57">	
      <dc:Bounds x="690" y="200" width="100" height="80" />	
      <bpmndi:BPMNLabel>	
        <dc:Bounds x="720" y="233" width="40" height="14" />	
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
