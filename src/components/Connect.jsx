import React, { useState } from "react";
import styled from "styled-components";

const Connect = () => {
  // State to hold the form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with input values
    const mailtoLink = `mailto:anjorinemmanueltt@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Redirect the user to their default email client
    window.location.href = mailtoLink;
  };

  return (
    <Wrapper>
      <Aboutcont>
        <Connectone>
          <h2>Lets Connect</h2>
          <p>
            Please fill out the form on this section to contact with me or call
            between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
          </p>
        </Connectone>

        <Messageme>
          <h2>Let’s Message me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </Messageme>
      </Aboutcont>
    </Wrapper>
  );
};

export default Connect;

const Wrapper = styled.div`
  margin: 0 auto;
  color: #ededed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Aboutcont = styled.div`
  max-width: 1920px;
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #0000002a;
  padding: 20px 0;
  margin-top: 80px;

  h2 {
    margin-bottom: 20px;
  }
`;

const Connectone = styled.div`
  max-width: 300px;

  p {
    font-size: 12px;
  }
`;

const Messageme = styled.div`
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 12px;
    border-radius: 4px;
  }

  textarea {
    overflow: hidden;
    border: none;
    outline: none;
    width: 320px;
    height: 120px;
    padding: 20px;
    border-radius: 4px;
  }

  button {
    background-color: #00abf0;
    padding: 16px 40px;
    border: none;
    color: white;
    border-radius: 8px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
      background-color: #081b29;
    }
  }
`;
