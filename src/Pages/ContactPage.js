import React, { useState, useEffect } from "react";
import "./ContactPage.scss";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="ContactPage">
      <div><h1>Contact US:</h1> </div>
      <div>
        UST Xpanxion, LLC Address: 1355 Windward Concourse Suite 400,
        Alpharetta, GA 30005 Phone: 949-716-8757{" "}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p><label>
          Email:
          <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        </p>
        <p>
        <label>
          Message:
          <p><textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          </p>
        </label>
        </p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
