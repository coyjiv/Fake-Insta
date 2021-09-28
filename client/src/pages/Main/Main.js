import React from 'react';
import MainFeedPost from '../../components/features/main_feed/MainFeedPost/MainFeedPost';

const tempPost = {
  "_id": "61534c7685eeec72be8d74f4",
  "image": "http://res.cloudinary.com/yalukaiwo/image/upload/v1632849016/postimages/61534c7685eeec72be8d74f4.jpg",
  "author": "SECRET_ACCOUNT",
  "description": "Minecraft",
  "likes": [
      "yalukaiwo"
  ],
  "comments": [
      {
          "author": "yalukaiwo",
          "message": "Wow! Fantastic!"
      },
      {
          "author": "yalukaiwo",
          "message": "Lol"
      }
  ],
  "__v": 5
}

function Main() {
  return (
    <>
      <MainFeedPost post={tempPost} />
    </>
  )
}

export default Main
