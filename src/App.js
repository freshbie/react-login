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
        <img src="files/logo.jpg" class="logo" /> <br />
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

          <input type="submit" class="submit1" value="Login" />
          <br />
          <br />
          <a href="signup.php">Not Registered ? Sign up</a>
          <br />
          <br />
          <a href="fget_pass.php">Forgot Password ? </a>
          <br />
          <br />
          <a href="files/ir330_sanjaay.pdf"> Terms and Conditions </a>
        </form>
      </center>
    </div>
  );
}
