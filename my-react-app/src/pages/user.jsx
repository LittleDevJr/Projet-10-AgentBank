import React, { useState, useEffect } from "react";
import Account from "../components/account";
import "../style/account.css";
import { connect } from "react-redux";
import { updateUserProfile } from "../redux/actions/authActions";

function User({ user, updateUserProfile }) {
  const [newUsername, setNewUsername] = useState(user ? user.userName : "");

  useEffect(() => {
    if (user) {
      setNewUsername(user.userName);
    }
  }, [user]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newUsername !== user.userName) {
      updateUserProfile({ userName: newUsername });
    }
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewUsername(user ? user.userName : "");
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  if (!user) {
    return <div>Please Sign in!</div>;
  }

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back<br />{user.firstName} {user.lastName}
          </h1>
          {isEditing ? (
            <div>
              <div className="labelContainer">
                <label className="label" htmlFor="username">User name</label>
                <input
                  id="username"
                  type="text"
                  value={newUsername || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="labelContainer">
                <label className="label" htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  type="text"
                  value={user.firstName}
                  disabled
                  style={{ backgroundColor: "#e0e0e0", cursor: "not-allowed" }}
                />
              </div>
              <div className="labelContainer">
                <label className="label" htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  value={user.lastName}
                  disabled
                  style={{ backgroundColor: "#e0e0e0", cursor: "not-allowed" }}
                />
              </div>
              <button className="saveButton" onClick={handleSaveClick}>Save</button>
              <button className="cancelButton" onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  updateUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
