import { StepItem } from "../../models/models";
import "./steps.scss";

type StepsProps = { stepData: StepItem };

const Steps = ({ stepData }: StepsProps) => {
  return (
    <div className="step-container p-sm-5 py-3 ps-3 pe-0">
      <div className="cutout-box">
        <span className="step-index">{stepData.stepIndex}</span>
        <div className="step-title fs-6 fw-semibold mb-1">{stepData.title}</div>
        <small
          className="step-desc fw-normal fst-italic text-light"
          dangerouslySetInnerHTML={{ __html: stepData.description }}
        />
      </div>
    </div>
  );
};

export default Steps;
