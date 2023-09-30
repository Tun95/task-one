import { Modal } from "antd";
import "./styles.scss";
import {
  CloseOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Select, Checkbox } from "antd";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

interface CustomModalProps {
  visible: boolean;
  onCancel: () => void;
}

export function CustomModal({ visible, onCancel }: CustomModalProps) {
  const options: Option[] = [
    { value: "paragraph", label: "Paragraph" },
    { value: "short answer", label: "Short answer" },
    { value: "yes/no", label: "Yes/No" },
    { value: "dropdown", label: "Dropdown" },
    { value: "multiple choice", label: "Multiple choice" },
    { value: "date", label: "Date" },
    { value: "number", label: "Number" },
    { value: "file upload", label: "File upload" },
    { value: "video question", label: "Video question" },
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleChange = (value: string) => {
    setSelectedOption(value);

    // Check if the selected option is "video question"
    if (value === "video question") {
      setShowVideoModal(true);
    } else {
      setShowVideoModal(false);
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
      wrapClassName="custom-modal"
      closable={false}
    >
      <div className="custom-modal-content">
        <div className="header">
          <h2>Questions</h2>
        </div>
        <div className="edit question">
          <div className="form_group">
            <label htmlFor="type">Type</label>
            <Select
              style={{
                width: "100%",
                height: "45px",
              }}
              className="select"
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="form_group">
            <label htmlFor="question">Question</label>
            <span className="">
              <input type="text" placeholder="Type here" />
            </span>
          </div>
          {/* Yes/No */}
          {selectedOption === "yes/no" && (
            <>
              <div className="form_group">
                <div className="check_box">
                  <Checkbox>Disqualify candidate if the answer is no</Checkbox>
                </div>
              </div>
            </>
          )}

          {/* Multiple choice */}
          {selectedOption === "multiple choice" && (
            <>
              <div className="form_group">
                <label htmlFor="choice" className="choice">
                  Choice
                </label>
                <span className="a_flex choice_input">
                  <UnorderedListOutlined className="icon" />
                  <input type="text" placeholder="Type here" />
                  <PlusOutlined className="icon" />
                </span>
                <div className="check_box">
                  <Checkbox>Enable “Other” option</Checkbox>
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="allowed">Max choice allowed</label>
                <span className="">
                  <input type="text" placeholder="Type here" />
                </span>
              </div>
            </>
          )}

          {/* Dropdown */}
          {selectedOption === "dropdown" && (
            <>
              <div className="form_group">
                <label htmlFor="choice" className="choice">
                  Choice
                </label>
                <span className="a_flex choice_input">
                  <UnorderedListOutlined className="icon" />
                  <input type="text" placeholder="Type here" />
                  <PlusOutlined className="icon" />
                </span>
                <div className="check_box">
                  <Checkbox className="custom-checkbox">
                    Enable “Other” option
                  </Checkbox>
                </div>
              </div>
            </>
          )}

          {/* Rest of your form */}
          <div className="form_group f_flex">
            <button className="btn delete a_flex">
              <CloseOutlined className="icon" />
              <span>Delete question</span>
            </button>
            <button className="btn save">Save</button>
          </div>
        </div>
      </div>
      {showVideoModal && (
        <CustomVideoModal
          visible={showVideoModal}
          onCancel={() => setShowVideoModal(false)}
        />
      )}
    </Modal>
  );
}

//Define the types
type Question = {
  id: number;
  duration: string;
  question: string;
  text: string;
  choice: string;
};
export function CustomVideoModal({ visible, onCancel }: CustomModalProps) {
  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const [editQuestionVisible, setEditQuestionVisible] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState<Question>({
    id: 0,
    duration: "",
    question: "",
    text: "",
    choice: "",
  });
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      duration: "4 minutes",
      question: "Tell us about yourself?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.",
      choice: "4 minutes",
    },
    {
      id: 2,
      duration: "2 minutes",
      question: "Why did you apply for this program?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.",
      choice: "2 minutes",
    },
  ]);

  //===============
  // EDIT HANDLER
  //===============
  const handleEditClick = (questionData: Question) => {
    setEditedQuestion(questionData);
    setEditQuestionVisible(true);
  };

  //===============
  // SAVE HANDLER
  //===============
  const handleSaveEdit = () => {
    // Find the index of the edited question in the questions array
    const questionIndex = questions.findIndex(
      (question) => question.id === editedQuestion.id
    );

    if (questionIndex !== -1) {
      // Create a copy of the questions array and update the edited question
      const updatedQuestions = [...questions];
      updatedQuestions[questionIndex] = editedQuestion;
      setQuestions(updatedQuestions);
    }

    // Reset the editedQuestion state and close the edit section
    setEditedQuestion({
      id: 0,
      duration: "",
      question: "",
      text: "",
      choice: "",
    });
    setEditQuestionVisible(false);
  };

  //===============
  // DELETE HANDLER
  //===============
  const handleDelete = (questionId: number) => {
    // Filter out the question with the given ID from the questions list
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId
    );

    // Reset the editedQuestion state and close the edit section
    setEditedQuestion({
      id: 0,
      duration: "",
      question: "",
      text: "",
      choice: "",
    });
    setEditQuestionVisible(false);

    setQuestions(updatedQuestions);
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
      wrapClassName="custom-modal"
      closable={false}
    >
      <div className="custom-modal-content ">
        <div className="header">
          <h2>Video based questions</h2>
        </div>
        <div className="content video_base">
          <div className="list">
            <ul>
              {questions.map((question) => (
                <li key={question.id}>
                  <small className="small">{question.duration}</small>
                  <span className="f_flex">
                    <h3>{question.question}</h3>
                    <EditOutlined
                      className="edit"
                      onClick={() => handleEditClick(question)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="edit question">
            {editQuestionVisible && (
              <>
                <div className="form_group">
                  <label htmlFor="question">Question</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    value={editedQuestion.question}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        question: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form_group">
                  <textarea
                    name="text"
                    id=""
                    className="textarea"
                    value={editedQuestion.text}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        text: e.target.value,
                      })
                    }
                  />{" "}
                </div>
                <div className="form_group f_flex select_form_group">
                  <input
                    type="text"
                    placeholder="Max duration of video"
                    value={editedQuestion.duration}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        duration: e.target.value,
                      })
                    }
                  />{" "}
                  <span>
                    <Select
                      showSearch
                      className="select"
                      placeholder="in (sec/min)"
                      optionFilterProp="children"
                      onSearch={onSearch}
                      filterOption={filterOption}
                      value={editedQuestion.choice}
                      onChange={(value) =>
                        setEditedQuestion({ ...editedQuestion, choice: value })
                      }
                      options={[
                        {
                          value: "4 minutes",
                          label: "4 minutes",
                        },
                        {
                          value: "2 minutes",
                          label: "2 minutes",
                        },
                        {
                          value: "4 seconds",
                          label: "4 seconds",
                        },
                      ]}
                    />
                  </span>
                </div>
                <div className="form_group f_flex">
                  <button
                    className="btn delete a_flex"
                    onClick={() => handleDelete(editedQuestion.id)}
                  >
                    <CloseOutlined className="icon" />
                    <span>Delete question</span>
                  </button>

                  <button className="btn save" onClick={handleSaveEdit}>
                    Save
                  </button>
                </div>{" "}
              </>
            )}
            <div className="form_group ">
              <button className="btn add a_flex">
                <PlusOutlined className="icon" />
                <span>Add video interview questions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
