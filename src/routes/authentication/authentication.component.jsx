import SignIn from "../../components/sign-in-form/sign-in.component";
import SignUp from "../../components/sign-up-form/signup.component";
import "./authentication.styles.scss";

  function Authentication() {
    
    return (
        <div className="authentication-container">
        <SignIn />
        <SignUp />
        </div>
    );
  }
  
  export default Authentication;