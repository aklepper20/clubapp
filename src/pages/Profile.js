import React from "react";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";
import { width } from "@mui/system";

function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${style.head} text-right mb-0`}>
            <Link to="/home">
              <img
                style={{ width: "15px" }}
                src="/images /arrow.png"
                alt="Home Icon"
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img
          src="/images /user-img.jpg"
          alt="user image"
          className={style.profile_image}
        />
        <h4>Aly</h4>
        <p>@Clever Programmer</p>
        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>50</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter />
            Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram />
            Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images /user-img.jpg" alt="user image" />
          <div>
            <p>Joined 14-march</p>
            <p>
              Nominated by <span>Sam Baez</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <bsPlus />+
        </button>
      </div>
    </>
  );
}

export default Profile;
