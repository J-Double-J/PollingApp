import SignIn from "./SignIn";
import SignInBusinessShowcase from "./SignInBusinessShowcase";
import './SignInPage.css';

function SignInPage() {
  return (
      <div className="signInPageContainer">
          <SignInBusinessShowcase />
          <SignIn/>
      </div>
  );
}

export default SignInPage;