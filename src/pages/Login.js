import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './login.scss'

export const Login = () => {
  const elEmail = useRef();
  const elPassword = useRef();
  const navigate = useNavigate();

  const hendleForm = (evt) => {
    evt.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: elPassword.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.localStorage.setItem("token", data.token);
          navigate("/");
          window.location.reload(true);
        }
      });
  };

  return (
    <div className="login">
      <div className="container  d-flex login__div">
        <div className="login__wrapper">
          <h1>Login</h1>

          <form onSubmit={hendleForm}>
            <input className="form-control" ref={elEmail} type="email" placeholder="Email.." />
            <input className="form-control mt-3" ref={elPassword} type="password" placeholder="Password.." />

            <button className="btn btn-primary mt-3 px-5" type="submit"> Send</button>
          </form>

          <p className="text-dark mt-5 text-end">eve.holt@reqres.in</p>
        </div>
      </div>
    </div>
  );
};
