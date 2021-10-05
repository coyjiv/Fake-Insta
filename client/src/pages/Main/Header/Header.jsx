import React from 'react';
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
const Header = (props) => {
    return(
        <div className={styles.header}>

            <div className={styles.container}>
                <Link exact to="/" >
                <img src="/insta.png" alt="instagram"></img>
                </Link>
            </div>

        </div>
    );
}

export default Header;