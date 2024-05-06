import './SignInBusinessShowcase.css';
import logo from '..\\..\\assets\\pie-logo-transparent.png';


function SignInBusinessShowcase() {
  return (
      <aside className = "showcase">
          <img src={logo } alt = "Data Pie Dreams logo: a pie" />
          <h1>Data gathering can be <strong>easy as pie!</strong></h1>
          <div>
              <p>Seeing results across surveys shouldn&apos;t be so hard! </p>
              <p>With <strong>Data Pie Dreams</strong> it no longer has to be!</p>
          </div>
      </aside>
  );
}

export default SignInBusinessShowcase;