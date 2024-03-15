import "./Profile.css"
import { createUser } from "../service/userService.jsx"

export const Profile = ({users}) => {
console.log(users)
    return  (
        <div className="userProfile">
            <div className="profile-pic">
                
            </div>
            <div>
            <div>
                <div className="user-info"></div>
                <div>{users?.fullName}</div>
            </div>
            </div>
                <div>
                <div className="user-info">Email:</div>
                <div>{users?.email}</div>
            </div>
            <div>
                <img className="userPic" alt="" src={users?.img} />
               
            </div>
            <div>
            <div>
                <div className="user-bio">Bio:</div>
                    <div>{users?.bio}</div>
            </div>
            </div>
        </div>
    )
}