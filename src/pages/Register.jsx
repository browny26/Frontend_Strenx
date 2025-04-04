import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo"; 
import InputField from "../components/InputField"; 
import Button from "../components/Button"; 
import "../styles/register.css";
const Register = () => {

    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const req = {
            email: formData.get("Email"),
            username: formData.get("Username"),
            password: formData.get("Password"),
            role:"user"
        }

        console.log(req);

        const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        });

        if(response.ok) {
            navigate("/login")
        }
        else {
            console.log("Error during registration");
        }
    }
  return (
    <div className="register-content">
        <div className="left-part">
          <Logo size={"medium"} color={"gray"} />
          <form method="POST"onSubmit={(e) => handleRegister(e)}  className="register-cont">
            <h1>Sign Up</h1>
            <div className="fields-cont">
              <InputField label={"Email"} type={"email"} />
              <InputField label={"Username"} type={"text"} />
              <InputField label={"Password"} type={"password"} />
            </div>
            <div className="bottom">
              <Button type={"submit"} text={"Sign up"} variant={"secondary"} />
              <p>
                Already a member?{" "}
                <Link className="link" to={"/login"}>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="right-part">
          <div className="right-part-cont">
            <Logo size={"large"} color={"white"} />
            <h3>Gear Up. Train Hard. Be Unstoppable!</h3>
          </div>
        </div>
      </div>
  )
}

export default Register