import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { auth, signInWithGooglePopup, signInWithGoogleRedirect , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../sign-up/sign-up-form";

const SignIn = () => {
    useEffect( () => {
        async function fetchData(){
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({user}); 
    }

return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
        Ingresar con mi cuenta de Google
        </button>
        <button onClick={signInWithGoogleRedirect}>
        Ingresar con Google Redirect
        </button>
        <SignUpForm />
    </div>
)
};

export default SignIn;