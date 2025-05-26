import React from "react";
import "./steps.scss";
export interface StepsProps {
  stepIndex: number;
  title: string;
  description: string;
}
const Steps = ({ stepIndex, title, description }: StepsProps) => {
  return (
    <div className="step-container p-sm-5 py-3 ps-3 pe-0">
      <div className="cutout-box">
        <span className="step-index">{stepIndex}</span>
        <div className="step-title fs-6 fw-semibold mb-1">{title}</div>
        <small
          className="step-desc fw-normal fst-italic text-light"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default Steps;
