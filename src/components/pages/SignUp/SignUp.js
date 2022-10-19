import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../userContext/UserContext";

const SignUp = () => {
  const [wrongPass, setWrongPass] = useState("");
  const { createUser } = useContext(AuthContext);

  const signUpFormHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.conPassword.value;
    console.log(email, password, confirm);

    if (password.length < 8) {
      setWrongPass("Your password must be less then 8 character");
      return;
    }

    if (password !== confirm) {
      setWrongPass("Your password does not match");
      return;
    }
    setWrongPass([]);

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrap">
      <h1 className="signup-title">Login</h1>

      <form onSubmit={signUpFormHandler}>
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
        {/* confirm password */}
        <div className="form-control">
          <label htmlFor="conPassword">Confirm Password</label>
          <input
            type="Confirm password"
            name="conPassword"
            id="conPassword"
            placeholder="Confirm password"
            className="form-input"
          />
        </div>

        <div className="form-control">
          <p style={{ color: "red" }}>{wrongPass}</p>
          <button>Login</button>
        </div>
      </form>
      <div className="form-control">
        <p>
          Already have an account <Link to="/login">Sign in</Link>
        </p>
        <p className="or">or</p>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default SignUp;
