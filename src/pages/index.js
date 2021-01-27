import * as React from "react";

import "./global.scss";
import Styles from "./styles.module.scss";

// markup
const IndexPage = () => {
  return (
    <main className={Styles["page"]}>
      <title>Craig Freeman</title>
      <h1 className={Styles["heading"]}>
        <a href="https://linkedin.com/in/cfree">
          <img
            className={Styles["logo"]}
            src="static/logo.svg"
            alt="Craig Freeman Logo"
          />
        </a>
      </h1>
    </main>
  );
};

export default IndexPage;
