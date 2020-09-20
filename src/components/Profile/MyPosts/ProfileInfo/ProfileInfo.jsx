import React from "react";
import profile from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={profile.content}>
            <div className={profile.image__wrapper}>
                <img
                    src="https://miro.medium.com/max/8256/1*5lpiSFo6j5dhrr6Z6RFd8Q.jpeg"
                    alt=""
                    className={profile.mainImage}
                />
            </div>
            <div className={profile.ProfileInfoWrapper}>
                <div>
                    ava+descr
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
