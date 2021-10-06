import React, {useEffect, useState} from 'react';
import UserWrapper from "../UserWrapper/UserWrapper";
import {connect} from "react-redux";
import styles from "./Subscriptions.module.scss";
import {getUser} from "../../../../store/visited_page/operations";
import axios from "axios";

const Subscriptions = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(async ()=>{
        if (props.users.length>0){props.getUser(props.aunt)
            const res = await Promise.all(props.users.map(async(nickname)=>{
                return (await axios(`/user/${nickname}`))
            }))
            setUsers(res.map((object)=>object.data))}
            return ()=>{}
        }
        ,[getUser, setUsers])
    if (props.isLoading){
        return null
    }

    else{

        return(
            <div className={styles.recommendation} style={props.addRules}>
                <h3 className={styles.rec}>{props.heading}</h3>
                <UserWrapper users={users} sub={props.sub}/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (user) => dispatch(getUser(user)),
    }
}
const mapStateToProps = (state) => ({
    state: state,
    isLoading:state.mainPage.isLoading,
    users: state.user.subscribed,
    aunt : state.user.username
});


export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);



