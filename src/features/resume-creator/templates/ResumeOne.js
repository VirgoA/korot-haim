import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ResumeOne(props) {
  return (
    <div>
      <p style={{ fontSize: "24px" }}>דלוג לט</p>
      <div>
        <p>פלאפון</p>
        <p>אימייל</p>
      </div>

      <div>
        <p>סיכום</p>
      </div>

      <div>
        <p>ניסיון</p>
      </div>

      <div>
        <p>השכלה</p>
      </div>

      <div>
        <p>קישורים</p>
      </div>
    </div>
  );
}

export default ResumeOne;
