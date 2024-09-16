import React from "react";
import useAuthHooks from "@/hooks/useAuthHooks";
import { icons } from "@/env/icons";

const LogoutModel = (props) => {
  const { logoutActionHandler } = useAuthHooks();
  const { closeModel } = props;

  return (
    <div className="confirmation-prompt">
      <img src={icons.Icon06} alt="logout" />
      <h1>You are leaving...</h1>
      <h2>Are you sure you want to log out?</h2>
      <div>
        <button onClick={closeModel} className="btn btn-outline-muted">
          Cancel
        </button>
        <button onClick={logoutActionHandler} className="confirm">
          Yes, Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutModel;
