import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  GroupOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function SideBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sidebarWidth = collapsed ? 50 : 200; // Adjust the widths as needed

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapse}
      width={sidebarWidth}
      theme="light"
    >
      {/* Menu Icon */}
      <div className="menu_icon" onClick={toggleCollapse}>
        {collapsed ? (
          <MenuOutlined className="icon" />
        ) : (
          <CloseOutlined className="close_icon icon" />
        )}
      </div>

      {/* Sidebar content */}
      <Menu theme="light" mode="vertical" className="menu_items">
        <Menu.Item
          key="1"
          icon={
            <Link to="/">
              <HomeOutlined />
            </Link>
          }
        >
          {collapsed ? null : <Link to="/">Home</Link>}
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <Link to="/application">
              <GroupOutlined />
            </Link>
          }
        >
          {collapsed ? null : <Link to="/application">Application</Link>}
        </Menu.Item>
        {/* <Menu.Item key="3" >
        {collapsed ? (
          <span className="user_short b_flex">
            <span className="text">NT</span>
          </span>
        ) : (
          <div className="user_name a_flex">
            <span className="user_short b_flex">
              <span className="text">NT</span>
            </span>{" "}
            <span>Naruto Task</span>
          </div>
        )}
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
}

export default SideBar;
