import React from "react";

import styles from "./startupMessage.module.css";

const StartUpMessageComponent = () => {
  return (
    <div className={styles["startup-message"]}>
      You don't have any task added in your Todo List right now. Start by adding
      tasks, to keep track of your daily works that you need to do!
    </div>
  );
};

export default StartUpMessageComponent;
