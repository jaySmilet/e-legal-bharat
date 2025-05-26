import { FAQ } from "../../models/models";
import "./accordion.scss";

interface AccordionProps {
  faq: FAQ[];
}

const Accordion = ({ faq }: AccordionProps) => {
  return (
    <div className="accordion" id="accordionExample">
      {faq.map((item: FAQ) => (
        <div className="accordion-item" key={item.index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.index}`}
              aria-controls={`collapse${item.index}`}
              aria-expanded="false"
            >
              # {item.question}
            </button>
          </h2>
          <div
            id={`collapse${item.index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body fs-normal text-secondary"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
