import { Link } from "react-router-dom";
import "./style.css";
const Login = () => {
  return (
    <form action="get" className="login-form b-rad-l p-01">
      <h1 className="head-2 fw-b">Login In</h1>
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
      </div>

      <button type="submit" className="btn btn-warning btn-lg">
        Login
      </button>
      <h3 className="head-3">
        <Link to="signup" className="text-p-color">
          New customer? <strong>Sign In here</strong>
        </Link>
      </h3>
    </form>
  );
};

export default Login;
