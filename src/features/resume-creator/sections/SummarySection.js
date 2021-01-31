import React from "react";
import TextArea from "../../../common/TextArea";

const SummarySection = (props) => {
  return (
    <div className="form-section">
      <span className="title">סיכום מקצועי</span>
      <span className="description">
        תרשמו 2-3 משפטים ברורים לגבי הניסיון הכללי שלכם
      </span>
      <div className="row-inputs">
        <TextArea
          onChange={(e) => {
            props.dispatcher(props.reducer(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default SummarySection;
