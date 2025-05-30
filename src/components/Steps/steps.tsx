import { StepItem } from "../../models/models";
import "./steps.scss";

type StepsProps = { stepData: StepItem[] };

const Steps = ({ stepData }: StepsProps) => {
  return (
    <div className="steps d-grid my-5">
      {stepData.map((step) => (
        <div
          key={step.stepIndex}
          className="step-item w-100 h-100 d-flex flex-column justify-content-stretch align-items-stretch"
        >
          <div
            key={step.stepIndex}
            className="cutout-box position-relative h-100 d-flex flex-column justify-content-start py-4 pe-4 rounded-2"
          >
            <span className="step-index d-flex justify-content-center align-items-center position-absolute fw-bold rounded-circle text-light cursor-pointer z-3">
              {step.stepIndex}
            </span>
            <div className="step-title fs-6 fw-semibold mb-1 text-light">
              {step.title}
            </div>
            <small
              className="step-desc fw-normal fst-italic text-light"
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
