import React from "react";
import "./UserList.css";

function UserList({ users }) {
  return (
    <div className="users-list">
      {users.map((user) => {
        return (
          <div class="card" key={user.id}>
            <div class="card-body">
              <p>User Name: {user.user_name}</p>
              <p>Email: {user.email}</p>
              <p>Balance: ${user.balance}</p>
            </div>

            <div class="card-footer">
              <button
                className="delete-button"
                // onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
