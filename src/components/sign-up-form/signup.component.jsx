import { useState, useContext } from "react";
import "./sign-up-form.styles.scss";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/context.component";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPass: ""
};

function SignUp() {
    const [ userDetails , setUserDetails ] = useState(defaultFormField);
    const {displayName, email, password, confirmPass} = userDetails;
    const { setCurrentUser } = useContext(UserContext);
    const resetFormFields = () => {
        setUserDetails(defaultFormField);
      };
    
    const submitHandler = async function(event){
        event.preventDefault();
        if(password !== confirmPass){
           alert("password does't match");
           return;
        }
        try{
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password,
          );
          setCurrentUser(user);
          await createUserDocumentFromAuth(user, {displayName});
          resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("This email already exist");
            }else{
                console.log("user encountered an error",error);
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
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput label="Display Name"
                  type="text" 
                  onChange={ ChangeHandler } 
                  value={displayName} 
                  name="displayName" 
                  required />

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

                <FormInput label="Confirm Password"
                 type="password" onChange={ ChangeHandler } 
                 value={confirmPass} name="confirmPass" 
                 required />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
  }
  
  export default SignUp;