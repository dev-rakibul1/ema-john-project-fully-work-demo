import React, { useContext } from "react";
import { AuthContext } from "./../../../userContext/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return <div>email: {user?.email}</div>;
};

export default About;
