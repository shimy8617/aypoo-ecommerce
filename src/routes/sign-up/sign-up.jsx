import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email:'',
    password: '',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );

                await createUserDocumentFromAuth(user, { displayName });
        } catch(error){
            console.log('user creation encountered an error', error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Ingresa con tu mail y contraseña</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre de usuario</label>
                <input 
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} />

                <label>Email</label>
                <input 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} />

                <label>Contraseña</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} />

                <label>Repite la contraseña</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} />

                <button type="submit">Confirmar</button>
            </form>
        </div>
    )
}

export default SignUpForm;