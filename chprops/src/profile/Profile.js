import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
    return (
        <div style={{ textAlign: "center" }}>
            {children}
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
            <button onClick={() => handleName(fullName)}>Show Name</button>
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
    fullName: "Wijden Azaza",
    bio: "No bio available",
    profession: "Master student",
    children: <img src="https://gomycodelearndev.blob.core.windows.net/profiles/bdd32436-2afe-431a-a990-66cdeb74bdb9-133195610347670294.jpg" alt="" />,
    handleName: (name) => alert(`Hello, my name is ${wijden}`),
};

export default Profile;

