import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                User {JSON.stringify(user.email)} is logged in.
            </div>  
        )
    )
};

export default Profile;