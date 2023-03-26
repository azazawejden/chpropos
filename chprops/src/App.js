import React from "react";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="wijden"
        bio="student"
        profession="master student"
        handleName={(name) => alert(`Hello ${name}`)}
      >
        <img src="https://gomycodelearndev.blob.core.windows.net/profiles/bdd32436-2afe-431a-a990-66cdeb74bdb9-133195610347670294.jpg" alt="Profile" />
      </Profile>
    </div>
  );
}

export default App;
;
