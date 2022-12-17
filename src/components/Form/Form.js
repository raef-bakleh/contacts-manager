import React, { useState } from "react";
import Error from "../Error/Error";
import Button from "./Button";
import "./Form.css";

function Form(props) {
  // const nameInputRef =  useRef('');
  // const ageInputRef =  useRef('');
  const [username, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const [error, setError] = useState();
  const userNameInput = (usernameInput) => {
    setUserName(usernameInput.target.value);
  };
  const userAgeInput = (userageInput) => {
    setUserAge(userageInput.target.value);
  };
  const returnNewUser = (event) => {
    event.preventDefault();
    // const username = nameInputRef.current.value
    // const age = ageInputRef.current.value
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: "Please enter a valid age and username",
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age number",
      });
      return;
    }
    const newUser = {
      id: Math.round(Math.random() * 1000),
      username: username,
      age: age,
    };
    localStorage.setItem(
      "users",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("users") || "[]"),
        newUser,
      ])
    );

    console.log(JSON.parse(localStorage.getItem("users")));
    setUserName("");
    setUserAge("");
    // nameInputRef.current.value = '';
    // ageInputRef.current.value = ''
    props.onHandleSubmit(newUser);
  };

  const removeError = () => {
    setError(null);
    console.log(error);
  };
  return (
    <div className="wErr">
      {error && (
        <Error
          onChange={removeError}
          title={error.title}
          message={error.message}
        />
      )}
      <form className="form" action="submit" onSubmit={returnNewUser}>
        <div className="input">
          <input
            // ref={nameInputRef}
            onChange={userNameInput}
            type="text"
            id="username"
            name="username"
            value={username}
            className={`${username ? "has-value" : ""}`}
          />
          <label id="username" htmlFor="username">
            Username
          </label>
        </div>
        <div className="input">
          <input
            // ref={ageInputRef}
            onChange={userAgeInput}
            type="number"
            id="age"
            name="age"
            value={age}
            className={`${age ? "has-value" : ""}`}
          />
          <label id="age" htmlFor="age">
            Age (Years){" "}
          </label>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
}

export default Form;
