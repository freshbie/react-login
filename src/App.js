import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <img src="logo.jpg" class="logo" /> <br />
        <br />
        <form method="post" name="form">
          <label for="usr">Username</label>
          <input
            type="text"
            id="usr"
            name="usr"
            placeholder="Enter Your Username"
          />
          <br />
          <br />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <br />
          <br />
          <p> Current Members Use Internet Banking Login</p>
          <input type="submit" class="submit1" value="Login" />
          <br />
          <br />
          <a href="">Not Registered ? Sign up</a>
          <br />
          <br />
          <a href="ir330_sanjaay.pdf"> Terms and Conditions </a>
        </form>
      </center>
    </div>
  );
}
