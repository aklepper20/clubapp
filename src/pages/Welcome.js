import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis,
        </p>
        <p>Qazi and Sal the clubhouse tem</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username
        </Link>
        <Link to="/invite">Have an invite text Sign in..</Link>
      </div>
    </div>
  );
}

export default Welcome;
