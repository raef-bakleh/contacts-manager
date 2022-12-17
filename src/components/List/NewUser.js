import React, { useState, useRef } from "react";
import Form from "../Form/Form";
import "./NewUser.css";

function NewUser(props) {
  console.log(JSON.parse(localStorage.getItem("users")));

  const [users, setNewUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const retrieveData = (prev) => {
    const allUsers = [...users, prev];
    setNewUsers(allUsers);
  };
  const delteItem = (id) => {
    localStorage.setItem(
      "users",
      JSON.stringify(
        JSON.parse(localStorage.getItem("users")).filter((user) => {
          return user.id !== id;
        })
      )
    );

    console.log(id);
    console.log(
      JSON.parse(localStorage.getItem("users")).filter((user) => {
        return user.id !== id;
      })
    );
    const removeUser = users.filter((user) => {
      return user.id !== id;
    });
    setTimeout(() => {
      setNewUsers(removeUser);
    }, 200);
  };

  return (
    <div>
      <Form onHandleSubmit={retrieveData} />
      <div className="all">
        {users.map((user) => (
          <div key={user.id} className="userList">
            <div className="nameAge">
              <div id="user">
                {user.username} {"(" + user.age + " years old" + ")"}
              </div>
              <div id="underline"></div>
            </div>
            <button id="delete" onClick={() => delteItem(user.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#494C6B"
                  fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewUser;
