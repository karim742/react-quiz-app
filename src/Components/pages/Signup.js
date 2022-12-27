import SignupForm from "../SignupForm";
import Illustration from "../Signupillustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
