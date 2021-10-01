import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {checkIfSubscribed, getPosts, getUser, subscribe} from "../../store/visited_page/operations";
import styles from "./Profile.module.scss";
import Nickname from "../../components/basic/Nickname/Nickname";
import Button from "../../components/basic/Button/Button";
import VisitPostsWrapper from "../../components/feature/VisitPostsWrapper/VisitPostsWrapper";
import {visitedPageSlice} from "../../store/visited_page";

const Profile = (props) => {
  const {username} = useParams();
  useEffect(() => {
    props.getUser(username);
  }, [getUser]);

  useEffect(() => {
    props.getPosts(username);
  }, [getPosts]);
  const aunt = props.usernam;
  useEffect(() => {
    if (aunt){
      props.checkIfSubscribed({username, aunt});
    }

  }, [checkIfSubscribed, aunt]);

  return (
  <main className={styles.main}>
    <div className={styles.container}>
      <header className={styles.avaHeader}>
        <div className={styles.avaInfo}>
          <img className={styles.avatar} width="150" src={props.visitedPage.image} alt="avatar"></img>
        </div>
        <section className={styles.avaInfoSection}>
          <div className={styles.subscribeSettings}>
            <Nickname name={props.visitedPage.username} fsize="15"/>
            <Button click={()=>props.subscribe({username,aunt, subs:props.visitedPage.subscribers})} isSubscribed={props.visitedPage.isSubscribed} isSubscribing={props.visitedPage.isSubscribing}/>
          </div>
          <ul className={styles.stats}>
            <li className={styles.statElement}><span> {props.visitedPage.posts.length}</span> постов</li>
            <li className={styles.statElement}>Подписчики: <span> {props.visitedPage.subscribers.length}</span></li>
            <li className={styles.statElement}>Подписки: <span> {props.visitedPage.subscribed.length}</span></li>
          </ul>
          <div className="description">
            <p className="description">{props.visitedPage.description}</p>
          </div>
        </section>
      </header>
      <div className={styles.postContent}>
        <VisitPostsWrapper posts={props.visitedPage.posts} imgwidth="293"/>
      </div>
    </div>
  </main>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUser(user)),
    getPosts: (user) => dispatch(getPosts(user)),
    subscribe: (user) => dispatch(subscribe(user)),
    checkIfSubscribed: (user) => dispatch(checkIfSubscribed(user))
  }
}
const mapStateToProps = (state) => ({
  visitedPage: state.visitedPage,
  usernam: state.user.username
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
