import LoginForm from "../LoginForm";
import Loginillustration from "../Loginillustration";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Loginillustration />
        <LoginForm />
      </div>
    </>
  );
}
