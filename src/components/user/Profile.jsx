import "./Profile.css"
import { createUser } from "../service/userService.jsx"


export const Profile = ({users}) => {
    return  (
        <div className="row">
        <div className="column">
            <div className="card-profile">
                {/* <img className="profile-pic" src={users?.img} /> */}
                <div className="container-profile">
                    <h2>{users?.fullName}</h2>
                    <p>{users?.bio}</p>
                    <p>{users?.email}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

