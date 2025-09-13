import { Menu } from "antd";
import { HomeOutlined, StarOutlined, AppstoreOutlined, MailOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home" icon={<HomeOutlined />}><a href="#hero">Home</a></Menu.Item>
      <Menu.Item key="skills" icon={<StarOutlined />}><a href="#skills">Skills</a></Menu.Item>
      <Menu.Item key="projects" icon={<AppstoreOutlined />}><a href="#projects">Projects</a></Menu.Item>
      <Menu.Item key="contact" icon={<MailOutlined />}><a href="#contact">Contact</a></Menu.Item>
    </Menu>
  );
}
