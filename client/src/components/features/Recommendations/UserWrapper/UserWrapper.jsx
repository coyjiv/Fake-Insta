import React, {useRef} from 'react';
import {NavLink} from "react-router-dom";
import UserLink from "./UserLink/UserLink";
import styles from "./UserWrapper.module.scss";
import Button from "../../../basic/Button/Button";
import {subscribeMain} from "../../../../store/user/operations";
import {connect} from "react-redux";

const UserWrapper = (props) => {
    const {users, sub,username,subscribed} = props;
    if (sub === false) {
        return (
            <div className={styles.wrapper}>
                {users.map((element) =>
                    <div key={element._id}>
                    <NavLink exact to={`/profile/${element.username}`}>
                        <UserLink ava={element.image} nick={element.username}
                                  stylednick={{fontWeight: 600, fontSize:"14px", marginLeft:"10px"}}/></NavLink>
                    </div>)}
            </div>
        );
    }

    else {
        return (
            <div className={styles.columnWrapper}>
                {users.map((element, index) =>
                    (<div key={index} className={styles.item}>
                        <NavLink
                            exact to={`/profile/${element.username}`}>
                            <UserLink ava={element.image} nick={element.username ? element.username : element}
                                      stylednick={{fontWeight: 600, fontSize:"14px", marginLeft:"10px"}}/></NavLink>
                        <Button user={element.username} id={index} click={()=>{
                            props.subscribeMain({username:element.username, aunt:username, subscribed})
                        }} variation={2}/>
                    </div>)
                )}
            </div>
        );
    }

}
const mapDispatchToProps = (dispatch) =>({
    subscribeMain: (user) => dispatch(subscribeMain(user))
})
export default connect(null, mapDispatchToProps)(UserWrapper);