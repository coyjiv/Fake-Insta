import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {getPosts, getUser, subscribe} from "../../store/visited_page/operations";
import styles from "./Profile.module.scss";
import Nickname from "../../components/basic/Nickname/Nickname";
import Button from "../../components/basic/Button/Button";
import VisitPostsWrapper from "../../components/feature/VisitPostsWrapper/VisitPostsWrapper";

const Profile = (props) => {
  const {username} = useParams();
  useEffect(() => {
    props.getUser(username);
  }, [getUser]);

  useEffect(() => {
    props.getPosts(username);
  }, [getPosts]);
  console.log(username)
  const aunt = props.username;
  return (
  <main className={styles.main}>
    <div className={styles.container}>
      <header className={styles.avaInfo}>
        <div className="ava-info__ava">
          <img className={styles.avatar} width="150" src={props.image} alt="avatar"></img>
        </div>
        <section className="ava-info__info">
          <div className="user-subscribe-settings">
            <Nickname name={props.username} fsize="15"/>
            <Button click={()=>props.subscribe(username,aunt)} content="Subscribe"/>
          </div>
          <ul className={styles.stats}>
            <li className="stat-element">{props.posts.length} постов</li>
            <li className="stat-element">{props.subscribers.length} подписчиков</li>
            <li className="stat-element">{props.subscribed.length} подписок</li>
          </ul>
          <div className="description">
            <p className="description">{props.description}</p>
          </div>
        </section>
      </header>
      <div className="post-content">
        <VisitPostsWrapper posts={props.posts} imgwidth="293"/>
      </div>
    </div>
  </main>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUser(user)),
    getPosts: (user) => dispatch(getPosts(user)),
    subscribe: (user) => dispatch(subscribe(user))
  }
}
export default connect((state)=>state.visitedPage, mapDispatchToProps)(Profile);
