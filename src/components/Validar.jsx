import React from 'react'

export default function Validar() {
    const [input, setInput] = useState({
        nombre: "",
        edad: 0,
        email: ""
    })
    const [error, setError] = useState('');

    function handChange (e) {
        if(e.target.name === 'nombre') {
            setName({...input, nombre: e.target.value})
        } 
        if(e.target.value === 'edad') {
            setEdad({...input, edad: e.target.value})
        }
        if(e.target.email === 'user') {
            validateEmail(input.user);
        }
    }


    function validateEmail(value) {
        var emailPattern = /\S+@\S+\.\S+/; // Expresion Regular para validar Emails.
        if (!emailPattern.test(value)) {
            setError("Debe ser un email");
        } else {
            setError("");
        }
    }

    return (
        <>
            <input type="text" name="name" value={input.nombre} onChange={(e) => handChange(e)} />
            <input type="number" name="edad" value={input.edad} onChange={(e) => handChange(e)} />
            <input type="text" name="email" value={input.email} onChange={(e) => handChange(e)} />
            {!error ? null : <div>{error}</div>}
        </>
    )
}
