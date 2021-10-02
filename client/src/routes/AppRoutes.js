import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfilePostShortcut from "../components/features/ProfilePostShortcut/ProfilePostShortcut";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile/:username" component={Profile} />
      <Route exact path="/test">
        <ProfilePostShortcut
          post={{
            id: "6151f586178166eb1874f483",
            image:
              "https://res.cloudinary.com/yalukaiwo/image/upload/v1632848969/postimages/61534c4485eeec72be8d74ec.jpg",
            author: "yalukaiwo",
            description: "what a nice day",
            likes: [],
            comments: [],
          }}
        />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
