import React, { useState } from "react";
import style from "../style/phoneConfirmation.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className={style.PhoneConfirmContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images /arrow.png" alt="back arrow" />
      </Link>
      <h1>Enter ur phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you are agreeing to our terms{" "}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link to="/code_confirm" className="primaryBtn d-flex align-items-center">
        Next
        <img src="/images /nextArrowIcon.svg" className="ml-1" />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
