import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "./common/sidebar/SideBar";
import NavBar from "./common/navbar/NavBar";
import "./App.css";
import StepperScreen from "./screen/stepper/StepperScreen";

const { Content } = Layout;

function App() {
  return (
    <div className="app">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
            className="layout"
          >
            <Content>
              <NavBar />
              <Routes>
                <Route path="/" element={<StepperScreen />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
