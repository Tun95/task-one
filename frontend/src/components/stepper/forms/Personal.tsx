import { CustomModal } from "../../modals/Modal";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Switch } from "antd";
import { useState } from "react";

function Personal() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="personal_info">
      <div className="box box_shadow">
        <div className="header">
          <h2>Personal Information</h2>
        </div>
        <div className="content">
          <ul>
            <li className="form_group group">
              <label className="label" htmlFor="firstName">
                First name
              </label>
            </li>
            <li className="form_group group">
              <label className="label" htmlFor="lastName">
                Last name
              </label>
            </li>{" "}
            <li className="form_group group">
              <label className="label" htmlFor="email">
                Email
              </label>
            </li>{" "}
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="phone">
                  <span> Phone</span> <small>(without dial code)</small>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Internal</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch defaultChecked />
                    <small>Hide</small>
                    {/* <small>Show</small> */}
                  </div>
                </div>
              </div>
            </li>{" "}
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="nationality">
                  <span> Nationality</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Internal</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch defaultChecked />
                    <small>Hide</small>
                    {/* <small>Show</small> */}
                  </div>
                </div>
              </div>
            </li>{" "}
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="residence">
                  <span>Current Residence</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Internal</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch defaultChecked />
                    <small>Hide</small>
                    {/* <small>Show</small> */}
                  </div>
                </div>
              </div>
            </li>
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="id number">
                  <span> ID Number</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Internal</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch defaultChecked />
                    <small>Hide</small>
                    {/* <small>Show</small> */}
                  </div>
                </div>
              </div>
            </li>
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="date">
                  <span> Date of Birth</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Internal</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch defaultChecked />
                    <small>Hide</small>
                    {/* <small>Show</small> */}
                  </div>
                </div>
              </div>
            </li>
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="gender">
                  <span>Gender</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Internal</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch defaultChecked />
                    <small>Hide</small>
                    {/* <small>Show</small> */}
                  </div>
                </div>
              </div>
            </li>
            {/* MAP NEW LIST */}
            {/* <li></li> */}
          </ul>
          <div className="form_group">
            <button className="btn a_flex" onClick={showModal}>
              <PlusOutlined className="icon" />
              <span>Add a question</span>
            </button>
            <CustomModal visible={modalVisible} onCancel={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
