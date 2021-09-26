import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { authenticate, getRecommendations } from "./store/user/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate({username: "yalukaiwo", password: "password"}));
    dispatch(getRecommendations("yalukaiwo"));
  }, [dispatch])

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
