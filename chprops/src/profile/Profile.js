import React from "react";
import PropTypes from "prop-types";


const Profile = ({ fullName, bio, profession, children, handleName }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {children}
            <h2>{fullName}</h2>
            <h4>{profession}</h4>
            <p>{bio}</p>
            <button onClick={() => handleName(fullName)}>Click Me</button>
        </div>
    );
};

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
    fullName: "wijden azaza",
    bio: "No bio available",
    profession: "Unknown",
    children: <img src="https://gomycodelearndev.blob.core.windows.net/profiles/bdd32436-2afe-431a-a990-66cdeb74bdb9-133195610347670294.jpg" alt="Profile" />,
    handleName: (name) => alert(`Profile user's name is ${name}`),
};

export default Profile;


