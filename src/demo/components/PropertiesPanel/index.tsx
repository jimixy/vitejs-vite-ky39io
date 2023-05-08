import React, { useEffect } from "react";
import LogicFlow, { NodeConfig } from "@logicflow/core";
import "./index.css";
import { Form, Input, Select, Collapse, Drawer } from "antd";
import { nodeList, roleOptions, statusOptions } from "../../data";
const { Panel } = Collapse;
export type NodeProperties = { label?: string } & NodeConfig;
const nodeOptions = [
  ...nodeList.map((node) => ({
    label: node.text,
    value: node.type,
  })),
  { label: "线条", value: "bpmn:sequenceFlow" },
];
/**
 * 属性查看面板
 */
const Properties: React.FC<{
  lf?: LogicFlow;
  data?: NodeConfig;
  open?: boolean;
  onClose?: () => void;
}> = ({ lf, data, open, onClose }) => {
  const [form] = Form.useForm();
  const handleValueChange = (
    changeValues: Partial<NodeProperties>,
    values: NodeProperties
  ) => {
    if (!data) return;
    if (Object.keys(changeValues).length > 0) {
      Object.keys(changeValues).forEach((key) => {
        if (key === "label") {
          lf?.updateText(data.id!, changeValues[key] as string);
        } else if (key === "type") {
          lf?.changeNodeType(data.id!, changeValues[key] as string);
        } else if (key === "properties") {
          // 是合并还是赋值?(目前看是合并操作)
          lf?.setProperties(data.id!, changeValues[key] as any);
        }
      });
    }
    console.log("changeValues:", changeValues, "values:", values);
  };

  useEffect(() => {
    if (open) {
      // 先清空已有的数据，避免数据受到影响
      form.resetFields();
      if (lf && data) {
        form.setFieldsValue({
          ...data,
          label: (data?.text as any)?.value || data?.text || "",
        });
      }
    }
  }, [lf, data, open]);
  return (
    <Drawer
      title="属性面板"
      open={open}
      placement="right"
      width={450}
      onClose={onClose}
      mask={false}
      destroyOnClose
    >
      <div className="custom-properties-panel">
        <div className="properties-panel-content">
          <Form
            form={form}
            labelCol={{ span: 4 }}
            onValuesChange={handleValueChange}
          >
            <Collapse defaultActiveKey={["base"]}>
              <Panel header="基础属性" key="base">
                <Form.Item label="Label" name="label">
                  <Input />
                </Form.Item>
                <Form.Item label="Type" name="type">
                  <Select options={nodeOptions} />
                </Form.Item>
              </Panel>
              <Panel header="额外属性" key="extra">
                <Form.Item label="权限" name={["properties", "role"]}>
                  <Select options={roleOptions} mode="multiple" />
                </Form.Item>
                <Form.Item label="状态" name={["properties", "status"]}>
                  <Select options={statusOptions} />
                </Form.Item>
              </Panel>
            </Collapse>
          </Form>
        </div>
      </div>
    </Drawer>
  );
};
export default Properties;
