import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { loadPosts } from '../../../../store/main_page/operations';
import MainFeedPost from '../MainFeedPost/MainFeedPost';
import styles from "./MainFeed.module.scss";

export const MainFeed = ({posts, username, hasMore, loadPosts}) => {
  const [loadStage, setLoadStage] = useState({from: posts.length || 5, to: posts.length ? posts.length + 2 : 7});
  const postsElements = posts.map((item) => <MainFeedPost key={item._id} post={item}/>);

  const nextHandler = () => {
    loadPosts({...loadStage, username});
    setLoadStage(prev => ({from: prev.from + 2, to: prev.to + 2}));
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={nextHandler}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>} //Connect Loader
      className={styles.container}
    >
      {postsElements}
    </InfiniteScroll>
  )
}

const mapStateToProps = (state) => ({
  posts: state.mainPage.posts,
  username: state.user.username,
  hasMore: !state.mainPage.isEnded
})

export default connect(mapStateToProps, { loadPosts } )(MainFeed)
