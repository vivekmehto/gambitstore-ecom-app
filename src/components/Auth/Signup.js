import { Link } from "react-router-dom";

import "./style.css";

const Signup = () => {
  return (
    <form action="get" className="signup-form b-rad-l p-01">
      <h1 className="head-2 fw-b">Sign Up</h1>
      <div className="input-wrapper">
        <label for="name">
          Name
          <input type="text" name="name" id="name" required />
        </label>
      </div>

      <div className="input-wrapper">
        <label>
          Email Address
          <input type="email" placeholder="Email" required />
        </label>
      </div>
      <div className="input-wrapper">
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            id="input-pass"
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            placeholder="Password"
            id="input-pass"
            required
          />
        </label>
      </div>
      <div className="checkbox">
        <label for="terms-condition">
          <input id="terms-condition" name="terms-condition" type="checkbox" />I
          have agreed to all terms and condition.
        </label>
      </div>
      <button type="submit" className="btn btn-warning btn-lg">
        Sign Up
      </button>
      <h3 className="head-3">
        <Link to="/login" className="text-p-color">
          Already our customer? <strong>Log In here</strong>
        </Link>
      </h3>
    </form>
  );
};

export default Signup;
