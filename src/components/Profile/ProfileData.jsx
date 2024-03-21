import React, { useEffect } from "react";
import { useState } from "react"
import { Profile } from "../user/Profile.jsx";
import { getUserProfile } from "../service/userService.jsx";

export const ProfileData = ({currentUser}) => {
    const [userProfile, setUserProfile] = useState([])
  

    useEffect(() => {
         
            getUserProfile(parseInt(currentUser.id)).then(userArray => {
                const userProfile = userArray[0]
                setUserProfile(userProfile)
            })
        
    }, [currentUser])


    return (
        <div className="user">
            <Profile users={userProfile} /> 
        </div>

    )
}

export default ProfileData