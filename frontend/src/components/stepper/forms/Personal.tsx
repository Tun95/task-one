import { CustomModal } from "../../modals/Modal";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Switch } from "antd";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
}

function Personal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [switchStates, setSwitchStates] = useState<{
    [key: string]: boolean;
  }>({
    phone: true,
    nationality: true,
    residence: true,
    idNumber: true,
    dateOfBirth: true,
    gender: true,
  });

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
            {/* Phone */}
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
                    <Switch
                      checked={switchStates.phone}
                      onChange={() => handleSwitchToggle("phone")}
                    />
                    <small>{switchStates.phone ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {/* Nationality */}
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
                    <Switch
                      checked={switchStates.nationality}
                      onChange={() => handleSwitchToggle("nationality")}
                    />
                    <small>{switchStates.nationality ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {/* Current Residence */}
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
                    <Switch
                      checked={switchStates.residence}
                      onChange={() => handleSwitchToggle("residence")}
                    />
                    <small>{switchStates.residence ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {/* ID Number */}
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
                    <Switch
                      checked={switchStates.idNumber}
                      onChange={() => handleSwitchToggle("idNumber")}
                    />
                    <small>{switchStates.idNumber ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {/* Date of Birth */}
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
                    <Switch
                      checked={switchStates.dateOfBirth}
                      onChange={() => handleSwitchToggle("dateOfBirth")}
                    />
                    <small>{switchStates.dateOfBirth ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {/* Gender */}
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
                    <Switch
                      checked={switchStates.gender}
                      onChange={() => handleSwitchToggle("gender")}
                    />
                    <small>{switchStates.gender ? "Hide" : "Show"}</small>
                  </div>
                </div>
              </div>
            </li>
            {/* MAP NEW LIST HERE*/}
            {questions.map((question, index) => (
              <li key={index} className="form_group group">
                <div className="head f_flex">
                  <label className="label" htmlFor="residence">
                    <span>{question.question} </span>
                  </label>
                  <div className="a_flex">
                    <div className="check_box">
                      <Checkbox>Internal</Checkbox>
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
            <button className="btn a_flex" onClick={showModal}>
              <PlusOutlined className="icon" />
              <span>Add a question</span>
            </button>
            <CustomModal
              visible={modalVisible}
              onCancel={closeModal}
              onAddQuestion={addQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
