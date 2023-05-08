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
