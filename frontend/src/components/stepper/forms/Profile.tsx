import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Switch } from "antd";
import { CustomModal } from "../../modals/Modal";

interface Question {
  id: number;
  question: string;
}

function Profile() {
  const [modalPersonalVisible, setModalPersonalVisible] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>({
    education: true,
    experience: true,
    resume: true,
  });

  const showPersonalModal = () => {
    setModalPersonalVisible(true);
  };

  const closePersonalModal = () => {
    setModalPersonalVisible(false);
  };

  const addQuestion = (question: Question) => {
    setQuestions([...questions, question]);
  };

  // Handle toggle of a specific switch
  const handleSwitchToggle = (key: string) => {
    const updatedSwitchStates = { ...switchStates };
    updatedSwitchStates[key] = !updatedSwitchStates[key];
    setSwitchStates(updatedSwitchStates);
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
                      checked={switchStates.education}
                      onChange={() => handleSwitchToggle("education")}
                    />
                    <small>{switchStates.education ? "Hide" : "Show"}</small>
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
                      checked={switchStates.experience}
                      onChange={() => handleSwitchToggle("experience")}
                    />
                    <small>{switchStates.experience ? "Hide" : "Show"}</small>
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
                      checked={switchStates.resume}
                      onChange={() => handleSwitchToggle("resume")}
                    />
                    <small>{switchStates.resume ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {questions.map((question, index) => (
              <li key={index} className="form_group group">
                <div className="head f_flex">
                  <label className="label" htmlFor="residence">
                    <span>{question.question} </span>
                  </label>
                  <div className="a_flex">
                    <div className="check_box">
                      <Checkbox>Mandatory</Checkbox>
                    </div>
                    <div className="switch a_flex">
                      <Switch
                        checked={switchStates[question.id.toString()]}
                        onChange={() =>
                          handleSwitchToggle(question.id.toString())
                        }
                      />
                      <small>
                        {switchStates[question.id] ? "Hide" : "Show"}
                      </small>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="form_group">
            <button className="btn a_flex" onClick={showPersonalModal}>
              <PlusOutlined className="icon" />
              <span>Add a question</span>
            </button>
            <CustomModal
              visible={modalPersonalVisible}
              onCancel={closePersonalModal}
              onAddQuestion={addQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
