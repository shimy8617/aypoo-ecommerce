import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email:'',
    password: '',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Ingresa con tu mail y contraseña</h1>
            <form onSubmit={() => {}}>
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