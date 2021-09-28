import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUser} from "../../store/visited_page/operations";
import styles from "./Profile.module.scss";
import Nickname from "../../components/basic/Nickname/Nickname";

const Profile = (props) => {
  useEffect(() => {
    props.getUser("yalukaiwo");
    console.log(props)
  }, [getUser]);
  return (
  <main className={styles.main}>
    <div className={styles.container}>
      <header className={styles.avaInfo}>
        <div className="ava-info__ava">
          <img className={styles.avatar} width="150" src={props.image} alt="avatar"></img>
        </div>
        <section className="ava-info__info">
          <div className="user-subscribe-settings">
            <Nickname name={} fsize={}/>
            <Button click={} content={}/>
          </div>
          <ul className="stats">
            <li className="stat-element"></li>
            <li className="stat-element"></li>
            <li className="stat-element"></li>
          </ul>
          <div className="description"></div>
        </section>
      </header>
      <div className="post-content"></div>
    </div>
  </main>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUser(user))
  }
}
export default connect((state)=>state.visitedPage, mapDispatchToProps)(Profile);
