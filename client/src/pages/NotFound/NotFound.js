import React from "react";
import Header from "../Main/Header/Header";
import {Link} from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (<>
    <Header/>
        <div className={styles.container}>
        <h1 className={styles.sorry}>Sorry, this page isn't avaliable</h1>
        <h5 className={styles.broken}>The link you followed may be broken, or the page may have been removed. <Link exact to="/">Go back to Instagram.</Link></h5></div>
    </>
  );
}

export default NotFound;
