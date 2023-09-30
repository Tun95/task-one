import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Switch } from "antd";
import { useState } from "react";
import { CustomModal } from "../../modals/Modal";

function Profile() {
  const [modalPersonalVisible, setModalPersonalVisible] = useState(false);
  const [educationSwitch, setEducationSwitch] = useState(true); // State for education switch
  const [experienceSwitch, setExperienceSwitch] = useState(true); // State for experience switch
  const [resumeSwitch, setResumeSwitch] = useState(true); // State for resume switch

  const showPersonalModal = () => {
    setModalPersonalVisible(true);
  };

  const closePersonalModal = () => {
    setModalPersonalVisible(false);
  };

  return (
    <div className="profile">
      <div className="box box_shadow">
        <div className="header">
          <h2>Profile</h2>
        </div>
        <div className="content">
          <ul>
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="phone">
                  <span>Education</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Mandatory</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch
                      defaultChecked={educationSwitch}
                      onChange={(checked) => setEducationSwitch(checked)}
                    />
                    <small>{educationSwitch ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="nationality">
                  <span>Experience</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Mandatory</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch
                      defaultChecked={experienceSwitch}
                      onChange={(checked) => setExperienceSwitch(checked)}
                    />
                    <small>{experienceSwitch ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            <li className="form_group group">
              <div className="head f_flex">
                <label className="label" htmlFor="residence">
                  <span>Resume</span>
                </label>
                <div className="a_flex">
                  <div className="check_box">
                    <Checkbox>Mandatory</Checkbox>
                  </div>
                  <div className="switch a_flex">
                    <Switch
                      defaultChecked={resumeSwitch}
                      onChange={(checked) => setResumeSwitch(checked)}
                    />
                    <small>{resumeSwitch ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="form_group">
            <button className="btn a_flex" onClick={showPersonalModal}>
              <PlusOutlined className="icon" />
              <span>Add a question</span>
            </button>
            <CustomModal
              visible={modalPersonalVisible}
              onCancel={closePersonalModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
