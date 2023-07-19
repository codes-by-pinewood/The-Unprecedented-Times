import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const lastnameHandler = (e) => {
    setLastName(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  async function registerRequest() {
    try {
      await fetch("http://localhost/unprecedentedtimes/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          username: username,
          password: password,
          email: email,
        }),
      })
        .then((respose) => {
          if (respose.ok) {
            return respose.json();
          }
          throw new Error("error");
        })
        .then((data) => {
          if (data.status) {
            localStorage.setItem("token", data.status);
            navigate("/confirm");
          } else {
            //set error
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    registerRequest();
  };

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Name</label>
        <input type="text" value={name} onChange={nameHandler} />
        <label>Last Name</label>
        <input type="text" value={lastname} onChange={lastnameHandler} />
        <label>Username</label>
        <input type="text" value={username} onChange={usernameHandler} />
        <label>Email</label>
        <input type="text" value={email} onChange={emailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={passwordHandler} />
        <button>Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
