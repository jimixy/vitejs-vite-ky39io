/**
 * 节点类型
 */
export const nodeList = [
  {
    type: "bpmn:startEvent",
    text: "开始",
    shape: <div className="custom-pattern-start" />,
  },
  {
    type: "bpmn:userTask",
    text: "用户任务",
    shape: <div className="custom-pattern-user" />,
  },
  {
    type: "bpmn:userTask2",
    text: "自定义任务",
    shape: <div className="custom-pattern-user" />,
  },
  {
    type: "bpmn:serviceTask",
    text: "服务任务",
    shape: <div className="custom-pattern-user" />,
  },
  {
    type: "bpmn:exclusiveGateway",
    text: "条件",
    shape: <div className="custom-pattern-condition" />,
  },
  {
    type: "bpmn:endEvent",
    text: "结束",
    shape: <div className="custom-pattern-end" />,
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
];
/**
 * 模式
 */
export const modeOptions = [
  {label:"编辑",value:"edit"},
  {label:"预览",value:"preview"},
  {label:"执行",value:"running"},
]
/**
 * 节点状态
 */
export const statusOptions = [
  {label:"待执行",value:"pending"},
  {label:"执行中",value:"running"},
  {label:"失败",value:"failed"},
  {label:"成功",value:"success"},
]