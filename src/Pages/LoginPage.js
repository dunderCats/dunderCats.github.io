import React, { useState } from "react";
import { Link } from "react-router-dom";

const PERSON_KEY = "PersonKey";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (eventChange) => {
    setUsername(eventChange.target.value);
    localStorage.setItem(PERSON_KEY, JSON.stringify(username));
  };

  const handlePassword = (eventChange) => {
    setPassword(eventChange.target.value);
  };

  const handleSubmit = (eventChange) => {
    eventChange.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsername}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePassword}
      />

      <button onSubmit={() => handleSubmit()}>
        <Link to="/">Log in</Link>
      </button>
    </form>
  );
};
