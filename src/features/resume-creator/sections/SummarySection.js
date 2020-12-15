import React from "react";

function SummaryForm(props) {
  return (
    <div>
      <h1>סיכום מקצועי</h1>
      <p>תרשמו 2-3 משפטים ברורים לגבי הניסיון הכללי שלכם</p>
      <textarea
        dir="rtl"
        name="paragraph_text"
        cols="70"
        rows="6"
        onChange={(e) => {
          props.dispatcher(props.reducer(e.target.value));
        }}
      ></textarea>
    </div>
  );
}

export default SummaryForm;
