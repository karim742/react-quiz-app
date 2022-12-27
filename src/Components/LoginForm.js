import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import Textinput from "./Textinput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <Form className={`${classes.login}`} onSubmit={handleSubmit}>
      <Textinput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Textinput
        type="password"
        placeholder="Enter password"
        icon="lock"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <NavLink to="/signup">Signup</NavLink> instead.
      </div>
    </Form>
  );
}
