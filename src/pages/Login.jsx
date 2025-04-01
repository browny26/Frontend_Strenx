import "../styles/login.css";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const req = {
      email: formData.get("Email"),
      password: formData.get("Password"),
    };

    console.log(req);

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
  };

  return (
    <>
      <div className="content">
        <div className="left-part">
          <Logo size={"medium"} />
          <form onSubmit={(e) => handleLogin(e)} className="login-cont">
            <h1>Sign In</h1>
            <div className="fields-cont">
              <InputField label={"Email"} type={"email"} />
              <InputField label={"Password"} type={"password"} />
            </div>
            <div className="bottom">
              <Button type={"submit"} text={"Sign In"} />
              <p>
                Not a member?{" "}
                <Link className="link" to={"/register"}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="right-part">
          <div className="right-part-cont">
            <Logo size={"large"} />
            <h3>Gear Up. Train Hard. Be Unstoppable!</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
