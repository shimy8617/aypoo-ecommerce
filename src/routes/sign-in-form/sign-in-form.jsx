import { useState } from "react";

import FormInput from "../../components/form-input/form-input";
import Button from "../../components/button/button";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email:'',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    /* useEffect( () => {
        async function fetchData(){
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
    }, []); */

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    /* const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({user}); 
    } */

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(
                email, password
            );
            console.log(response);
            resetFormFields();
        } catch(error){
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('contraseña incorrecta');
                    break;
                case 'auth/user-not-found':
                    alert('no hay un usuario asociado al email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Ya tengo una cuenta</h2>
            <span>Ingresa con tu mail y contraseña</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label = "Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} />

                <FormInput 
                    label = "Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} />
                
                <div className="buttons-container">
                    <Button type="submit">Ingresar</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;