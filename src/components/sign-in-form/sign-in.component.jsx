import { useState , useContext} from "react";
import "../sign-up-form/sign-up-form.styles.scss";
import { UserContext } from "../../context/context.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";


const defaultFormField = {
    email: "",
    password: ""
};


function SignIn() {
    const [ userDetails , setUserDetails ] = useState(defaultFormField);
    const { email, password} = userDetails;
    const { setCurrentUser } = useContext(UserContext);
    
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
      };

    const resetFormFields = () => {
        setUserDetails(defaultFormField);
      };
    
    const submitHandler = async function(event){
        event.preventDefault();
        
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password,
            );
            setCurrentUser(user);
            resetFormFields();
        }catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('no user associated with this email');
                  break;
                default:
                  console.log(error);
             }
        }
    }
    const ChangeHandler = function(event){
        const fieldName = event.target.name;
        const value = event.target.value;
        setUserDetails({...userDetails, [fieldName]: value})
    }

    return (
        <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign In with your email and password</span>
            <form onSubmit={submitHandler}>

                <FormInput label="Email"
                 type="email" 
                 onChange={ ChangeHandler } 
                 value={email} name="email"
                 required />

                <FormInput label="Password" 
                 type="password" 
                 onChange={ ChangeHandler } 
                 value={password} name="password" 
                 required />

                <div className="buttons-container ">
                <Button type="submit">Sign In</Button>
                <Button type="submit" onClick={logGoogleUser} buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign In</Button>
                </div>

            </form>
        </div>
    );
  }
  
  export default SignIn;