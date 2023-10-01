import { useState } from "react";
import {
  PlusOutlined,
  EditOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { CustomModal } from "../../modals/Modal"; // Import the CustomModal component

interface Question {
  id: number;
  question: string;
  choice: string;
  disqualifyIfNo?: boolean;
  maxChoices?: string;
}

function AdditionalQts() {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [editQuestionVisible, setEditQuestionVisible] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState<Question>({
    id: 0,
    question: "",
    choice: "",
  });
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: "Please tell me about yourself in less than 500 words",
      choice: "paragraph",
    },
    {
      id: 2,
      question: "Please select the year of graduation from the list below",
      choice: "Dropdown",
    },
    {
      id: 3,
      question: "Have you ever been rejected by the UK embassy?",
      choice: "Yes/No",
    },
  ]);

  const showAddModal = () => {
    setModalAddVisible(true);
  };

  const closeAddModal = () => {
    setModalAddVisible(false);
  };

  const addQuestion = (question: Question) => {
    // Set the choice property based on the selected option
    const selectedOption = question.choice;
    setQuestions([...questions, { ...question, choice: selectedOption }]);
    // Clear the editedQuestion state when a new question is added
    setEditedQuestion({
      id: 0,
      question: "",
      choice: "",
    });
  };

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
    // Update the edited question in the questions list
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((question) => {
        if (question.id === editedQuestion.id) {
          return {
            ...question,
            question: editedQuestion.question,
            choice: editedQuestion.choice,
          };
        }
        return question;
      });
      return updatedQuestions;
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
    setQuestions(updatedQuestions);
    setEditQuestionVisible(false);
  };

  console.log(questions);
  return (
    <div className="additional_qts">
      <div className="box box_shadow">
        <div className="header">
          <h2>Additional questions</h2>
        </div>
        <div className="content">
          <div className="list">
            <ul>
              {questions.map((question) => (
                <li key={question.id}>
                  <small className="small">{question.choice}</small>
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

          {editQuestionVisible && (
            <div className="edit question">
              <div className="head">
                <h3>Edit Question</h3>
              </div>
              <div className="form_group">
                <input
                  type="text"
                  placeholder="Type here"
                  value={editedQuestion.question || ""}
                  onChange={(e) =>
                    setEditedQuestion({
                      ...editedQuestion,
                      question: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form_group">
                <label htmlFor="choice" className="choice">
                  Choice
                </label>
                <span className="a_flex">
                  <UnorderedListOutlined className="icon" />
                  <input
                    type="text"
                    placeholder="Type here"
                    value={editedQuestion.choice || ""}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        choice: e.target.value,
                      })
                    }
                  />
                  <PlusOutlined className="icon" />
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
              </div>
            </div>
          )}

          <div className="form_group">
            <button className="btn a_flex" onClick={showAddModal}>
              <PlusOutlined className="icon" />
              <span>Add a question</span>
            </button>
            {/* Pass props to the CustomModal component */}
            <CustomModal
              visible={modalAddVisible}
              onCancel={closeAddModal}
              onAddQuestion={(question) => {
                addQuestion(question);
                closeAddModal(); // Close the modal after adding the question
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalQts;
