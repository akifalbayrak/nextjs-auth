import { useSession, getSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
// import { useEffect, useState } from "react";

function UserProfile() {
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     getSession().then((session) => {
    //         setIsLoading(false);
    //         if (!session) {
    //             window.location.href = "/auth";
    //         } else {
    //             setIsLoading(false);
    //         }
    //     });
    // });
    // if (isLoading) {
    //     return <p className={classes.profile}>Loading...</p>;
    // }

    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm />
        </section>
    );
}

export default UserProfile;
