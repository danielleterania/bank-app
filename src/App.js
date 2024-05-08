import "./App.css";
import MainNav from "./components/MainNav/MainNav";
import SubNav from "./components/SubNav/SubNav";
import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import data from "./assets/Name-List.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import Deposit from "./components/Deposit/Deposit";
import SendMoney from "./components/SendMoney/SendMoney";
import BudgetApp from "./components/BudgetApp/BudgetApp";
import GetBalance from "./components/GetBalance/GetBalance";
import Withdraw from "./components/Withdraw/Withdraw";

function App() {
  const [users, setUsers] = useState(data);
  // data is an array of objects/tasks

  const handleNewUsers = (newUsers) => {
    //  newTask - the task that will be added to our tasks state
    // prevTasks - existing task in our array
    // [...prevTasks, newTask] - creates a new array that contains the previous tasks and the newly created task and gives it back to our tasks state
    //  setTasks - responsible for assigning the new array to tasks
    setUsers((prevUsers) => [...prevUsers, newUsers]);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className="App">
      <MainNav />
      <BrowserRouter>
        <SubNav />
        <Routes>
          <Route index element={<UserList users={users} />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/budget-app" element={<BudgetApp />} />
          <Route path="/get-balance" element={<GetBalance />} />
        </Routes>
      </BrowserRouter>

      <main className="MainWrapper">{/* Content of main wrapper */}</main>

      {
        <div className="ListOfUsers">
          <AddUser
            handleAddUser={handleNewUsers}
            newId={users.length}
          ></AddUser>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <p>User Name: {user.user_name}</p>
                <p>Email: {user.email}</p>
                <p>Balance: ${user.balance}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default App;
