import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={styles.container}>
      <div style={styles.image}>{children}</div>
      <h1 style={styles.name} onClick={() => handleName(fullName)}>
        {fullName}
      </h1>
      <h2 style={styles.profession}>{profession}</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: "Wijden Azaza",
  bio: "",
  profession: "Master student",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid black",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "10px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  profession: {
    fontSize: "12px",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  bio: {
    fontSize: "12px",
    textAlign: "center",
  },
};

export default Profile;
