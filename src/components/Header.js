import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";

function Header() {
  return (
    <div className={style.Header}>
      <Link to="/explore">
        <img src="/images /search.png" alt="Search Icon" />
      </Link>
      <div className={style.nav_items}>
        <Link to="/friends_invite">
          <img src="/images /invite.png" alt="Invite Friends Icon" />
        </Link>
        <Link to="/upcoming">
          <img src="/images /calendar.png" alt="Invite Friends Icon" />
        </Link>
        <Link to="/activity">
          <img src="/images /noti.png" alt="Invite Friends Icon" />
        </Link>
        <Link to="/profile">
          <img src="/images /b1.png" alt="Invite Friends Icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
