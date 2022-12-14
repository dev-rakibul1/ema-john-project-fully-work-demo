import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../userContext/UserContext";
import "./Login.css";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("Login fail!");

  const from = location.state?.from?.pathname || "/";

  const loginPagesHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setError("login success");
      })
      .then((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="form-wrap">
      <h1 className="signup-title">Login</h1>

      <form onSubmit={loginPagesHandler}>
        {/* email */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-input"
          />
        </div>
        {/* password */}
        <div className="form-control">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-input"
          />
        </div>

        <div className="form-control">
          <p>{error}</p>
          <button>Login</button>
        </div>
      </form>
      <div className="form-control">
        <p>
          New to Ema Jon <Link to="/signup">Create New Account</Link>
        </p>
        <p className="or">or</p>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
