import SignInForm from "../../components/signin/signinform";
import SignUpForm from "../../components/signupform/signupform";
import './authentication.scss';



const Authentication = () => {
    return (
      <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;