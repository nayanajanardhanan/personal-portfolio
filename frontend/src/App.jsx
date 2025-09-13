import React, { useEffect, useState } from "react";
import { Layout, Spin } from "antd";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const { Header, Content, Footer } = Layout;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/resume")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data)
    return <Spin size="large" style={{ display: "block", margin: "20% auto" }} />;

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar />
      </Header>

      <Content style={{ padding: "40px", background: "#f0f2f5" }}>
        <Hero name={data.name} title={data.title} about={data.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact />
      </Content>

      <Footer style={{ textAlign: "center", background: "#001529", color: "#fff" }}>
        © {new Date().getFullYear()} {data.name} | Built with ❤️ using React + FastAPI
      </Footer>
    </Layout>
  );
}

export default App;
