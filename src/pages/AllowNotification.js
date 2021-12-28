import React from "react";
import style from "../style/phoneConfirmation.module.css";
import { Link } from "react-router-dom";

function AllowNotification() {
  return (
    <div className={style.PhoneConfirmContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last important step</h1>
        <h1 className="mb-3">
          Enable notifications to know when people are talking
        </h1>
        <div className={style.notificationsContainer}>
          <div className="p-3">
            <h3>"Clubhouse would like to send you notifications"</h3>
            <p>Notifications may include alerts, sounds and icon badges</p>
          </div>
          <div className={style.action_btn}>
            <Link to="/home">Don't Allow</Link>
            <Link to="/home">Allow</Link>
            <img
              src="/images /handIcon.svg"
              alt="Hand Icon"
              className={style.hand_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification;
