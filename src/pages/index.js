import * as React from "react";

import "./global.scss";
import Styles from "./styles.module.scss";
import logo from "../images/logo.svg";

// markup
const IndexPage = () => {
  return (
    <main className={Styles["page"]}>
      <title>Craig Freeman</title>
      <h1 className={Styles["heading"]}>
        <a href="https://linkedin.com/in/cfree">
          <img className={Styles["logo"]} src={logo} alt="Craig Freeman Logo" />
        </a>
      </h1>
    </main>
  );
};

export default IndexPage;
