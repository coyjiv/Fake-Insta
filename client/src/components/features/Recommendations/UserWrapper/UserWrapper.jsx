import React from 'react';
import {NavLink} from "react-router-dom";
import UserLink from "./UserLink/UserLink";

const UserWrapper = ({users}) => {
    console.log(users)
    return(
        <div>
            {users.map((element)=><NavLink exact to={`/profile/${element.username}`}><UserLink ava={element.image} nick={element.username}/></NavLink>)}
        </div>
    );
}

export default UserWrapper;