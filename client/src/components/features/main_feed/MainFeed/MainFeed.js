import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { loadPosts } from '../../../../store/main_page/operations';
import MainFeedPost from '../MainFeedPost/MainFeedPost';
import styles from "./MainFeed.module.scss";
import GlobalLoader from "../../../basic/GlobalLoader/GlobalLoader";
import Recommendations from "../../Recommendations/Recommendations";
import Header from "../../../../pages/Main/Header/Header";
import Subscriptions from "../../Recommendations/Subscriptions/Subscriptions";
import Loader from "../Loader/Loader";

export const MainFeed = ({posts, username, hasMore, loadPosts, isLoading}) => {
  const [loadStage, setLoadStage] = useState({from: posts.length || 5, to: posts.length ? posts.length + 2 : 7});
  const postsElements = posts.map((item) => <MainFeedPost key={item._id} post={item}/>);
  const nextHandler = () => {
    loadPosts({...loadStage, username});
    setLoadStage(prev => ({from: prev.from + 2, to: prev.to + 2}));
  }
  if (isLoading){
      return <GlobalLoader image="/favicon.ico"/>
  }
  else {
  return (
      <>

        <Header/>
        <div className={styles.globalWrapper}>
    <InfiniteScroll
      dataLength={posts.length}
      next={nextHandler}
      hasMore={hasMore}
      loader={<Loader/>} //Connect Loader
      className={styles.container}
    >

      {postsElements}

    </InfiniteScroll>
          <div className={styles.recWrapper}>

        <Subscriptions isLoading={isLoading} heading="Stories" sub={false}/>
            <Recommendations isLoading={isLoading} heading="Recommendations" sub={true} addRules={{top:"45%"}}/>
          </div>
        </div>
        </>
  )
  }
}

const mapStateToProps = (state) => ({
  posts: state.mainPage.posts,
  username: state.user.username,
  hasMore: !state.mainPage.isEnded,
    isLoading: state.mainPage.isLoading
})

export default connect(mapStateToProps, { loadPosts } )(MainFeed)
