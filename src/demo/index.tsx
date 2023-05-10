import { useState } from "react";
import { Button, Radio, Space } from "antd";
import { modeOptions } from "./data.tsx";
import styles from "./index.module.less";
import Bpmn from "./components/Bpmn/index.tsx";
const Demo: React.FC<{ readonly?: boolean }> = () => {
	const [mode, setMode] = useState<"edit" | "preview">("edit");
	// 模式切换
	const handleModeChange = (e: any) => {
		setMode(e.target?.value as any);
	};
	return (
		<div className={styles.demoContainer}>
			<div className={styles.bpmnOperator}>
				<Space>
					<Radio.Group
						options={modeOptions}
						onChange={handleModeChange}
						value={mode}
						optionType="button"
						buttonStyle="solid"
					/>
				</Space>
			</div>
			<Bpmn readonly={mode === "preview"} />
		</div>
	);
};
export default Demo;
