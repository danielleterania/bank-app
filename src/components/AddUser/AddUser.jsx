import { useState } from "react";
import "./AddUser.css";

function AddUser(props) {
  const { handleAddUser, newId } = props;

  // declaration for the new task
  const [userList, setUserList] = useState("");
  const [emailList, setEmailList] = useState("");
  const [balanceList, setBalanceList] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUserObject = {
      user_name: userList,
      email: emailList,
      balance: balanceList,
      id: newId,
    };

    console.log(newUserObject);
    handleAddUser(newUserObject);

    setUserList("");
    setEmailList("");
    setBalanceList("");
  };

  return (
    <div className="addUser">
      <form onSubmit={addUserHandler}>
        <input
          value={userList}
          placeholder="Add user name here"
          onChange={(event) => setUserList(event.target.value)}
          required
        ></input>
        <input
          value={emailList}
          type="email"
          placeholder="Add email here"
          onChange={(event) => setEmailList(event.target.value)}
          required
        ></input>
        <input
          value={balanceList}
          type="number"
          placeholder="Add inital balance"
          onChange={(event) => setBalanceList(event.target.value)}
          required
        ></input>
        <button>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
