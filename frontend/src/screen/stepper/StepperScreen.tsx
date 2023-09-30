import React, { useState, useEffect } from "react";
import { Button } from "antd";
import ProgramDetails from "../../components/stepper/ProgramDetails";
import ApplicationForm from "../../components/stepper/ApplicationForm";
import Workflow from "../../components/stepper/Workflow";
import Preview from "../../components/stepper/Preview";
import "./styles.scss";

const steps = [
  {
    title: "Program Details",
    content: <ProgramDetails />,
  },
  {
    title: "Application Form",
    content: <ApplicationForm />,
  },
  {
    title: "Workflow",
    content: <Workflow />,
  },
  {
    title: "Preview",
    content: <Preview />,
  },
];

function StepperScreen() {
  // Initialize currentStep from localStorage or default to 0
  const [currentStep, setCurrentStep] = useState(() => {
    try {
      const savedStep = localStorage.getItem("currentStep");
      if (savedStep !== null) {
        return parseInt(savedStep, 10);
      }
    } catch (error) {
      console.error("Error loading currentStep from localStorage:", error);
    }
    return 0; // Default value
  });

  // Save the current step to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("currentStep", currentStep.toString());
    } catch (error) {
      console.error("Error saving currentStep to localStorage:", error);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper">
      <div className="step_headers">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`step_header ${currentStep === index ? "active" : ""}`}
            onClick={() => setCurrentStep(index)}
          >
            {currentStep === index && <div className="step_arrow" />}
            <div className="step_text">{step.title}</div>
          </div>
        ))}
      </div>
      <div className="steps_content">{steps[currentStep].content}</div>
      <div className="step_btn container">
        <div className="steps_action c_flex ">
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepperScreen;
