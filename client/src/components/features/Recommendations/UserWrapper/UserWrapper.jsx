import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import UserLink from "./UserLink/UserLink";
import styles from "./UserWrapper.module.scss";
import Button from "../../../basic/Button/Button";
import {subscribe} from "../../../../store/visited_page/operations";
import {connect} from "react-redux";
import {getSubscribedUsers} from "../../../../store/main_page/operations";

const UserWrapper = (props) => {
    useEffect(()=>props.getSubscribedUsers(props.usernam),[getSubscribedUsers])
    const {users,sub} = props;
    if (sub===false){
        return (
            <div className={styles.wrapper}>
                {users.map((element)=>
                    <NavLink key={element._id}
                             exact to={`/profile/${element.username}`}>
                        <UserLink ava={element.image} nick={element.username}
                                  stylednick={{fontWeight:600}}/></NavLink>)}
            </div>
        );
    }else{
        return(
            <div className={styles.wrapper}>
                {users.map((element,index)=>
                    <div key={index}>
                        <NavLink
                                 exact to={`/profile/${element.username}`}>
                            <UserLink ava={element.image} nick={element.username? element.username:element}
                                      stylednick={{fontWeight:600}}/></NavLink>
                        {/*<Button isSubscribed={} isSubscribing={} click={()=>props.subscribe({username:props.usernam, aunt:element.username, subs:props.state.user.subscribed})} variation={2}/>*/}
                    </div>
                )}
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        subscribe: (user) => dispatch(subscribe(user)),
        getSubscribedUsers: (user) => dispatch(getSubscribedUsers(user))
    }
}
const mapStateToProps = (state) => ({
    visitedPage: state.visitedPage,
    usernam: state.user.username,
    state:state,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserWrapper);