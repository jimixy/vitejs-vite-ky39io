import "./index.css";
import "./App.less";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import "antd/dist/reset.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [defaultSelectedKeys] = useState([
    location.pathname,
  ]);
  const [menuVisible, setMenuVisible] = useState(true);
  const handleToggleMenuVisible = () => {
    setMenuVisible((val) => !val);
  };
  // 导航
  const handleNav = (menu: any) => {
    navigate(menu.key);
  };
  const items: MenuItem[] = [
    getItem("Home", "/", null, [
      getItem("Test1", "/test1"),
      getItem("Test2", "/test2"),
      getItem("Test3", "/test3"),
      getItem("Test4", "/test4"),
    ]),
    getItem("Demo", "/demo", null, [
      getItem("demo1", "/demo1"),
    ]),
  ];
  return (
    <div id="app">
      <div
        className={`layout-menu ${menuVisible ? "menu-show" : "menu-hidden"}`}
      >
        <div className="collapsed-btn" onClick={handleToggleMenuVisible}>
          {menuVisible ? <LeftCircleOutlined /> : <RightCircleOutlined />}
        </div>
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          onClick={handleNav}
          items={items}
          mode="inline"
          inlineCollapsed={false}
        />
      </div>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}
