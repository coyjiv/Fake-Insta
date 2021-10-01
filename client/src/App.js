import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { authenticate, getRecommendations } from "./store/user/operations";
import "./reset.css";
import { loadPosts } from "./store/main_page/operations";

function App({authenticate, getRecommendations, loadPosts}) {
  useEffect(() => {
    const fetchData = async () => {
      const { username } = (await authenticate({username: "yalukaiwo", password: "password"})).payload;
      getRecommendations(username);
      loadPosts({from: 0, to: 5, username});
    };

    fetchData();
  }, [authenticate, getRecommendations, loadPosts]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default connect(null, {authenticate, getRecommendations, loadPosts})(App);
