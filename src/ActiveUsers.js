import React, {useEffect, useState} from 'react';
import './ActiveUsers.css';
// import { Avatar } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
import db from "./firebase";

function ActiveUsers() {

    const [user, setUser] = useState({})

    useEffect(() => {
        db.collection("users")
            .get()
            .then(snapshot => {
                snapshot.forEach( doc =>{
                    
                    const user = doc.data();
                    setUser(user);
                    
                    console.log(user);

                })
            })
        
        // console.log(user);
        
    },[])

    if(user){
        return (
            <div className="activeUsers">
                <div className="activeUsers_header">
                    <h4> No Active Users</h4>
                </div>
            </div>
        )
    }
    return (
        <div className="activeUsers">
            <div className="activeUsers_header">
                <h4>Active Users</h4>
            </div>
            {/* {
                Object.keys(user.object).map((us, i) => (
                    <div className="activeUsers_ppl" key={i}>
                        <Avatar src={us.photo}/>
                        <div className="userName">
                            <h4>{us.displayName}</h4>
                        </div>  
                    </div>
                    ))
            } */}

            {/* {
                Object.keys(user.object).map((user, i) => (
                <div className="activeUsers_ppl" key={i}>
                    <Avatar src={user.photo}/>
                    <div className="userName">
                        <h4>{user.displayName}</h4>
                    </div>  
                </div>
                ))
            } */}

            {/* <div className="activeUsers_ppl">
                <Avatar src={user.photo}/>
                <div className="userName">
                    <h4>{user.displayName}</h4>
                </div>  
            </div> */}
            
        </div>
    )
}

export default ActiveUsers
