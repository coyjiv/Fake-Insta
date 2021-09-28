import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { authenticate, getRecommendations } from "./store/user/operations";
import "./reset.css";

function App({authenticate, getRecommendations}) {
  useEffect(() => {
    authenticate({username: "yalukaiwo", password: "password"});
    getRecommendations("yalukaiwo");
  }, [authenticate, getRecommendations]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (user) => dispatch(authenticate(user)),
    getRecommendations: (user) => dispatch(getRecommendations(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
