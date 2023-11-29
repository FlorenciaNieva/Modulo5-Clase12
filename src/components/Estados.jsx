import React from 'react'
import { useState } from 'react'

export default function Form() {
    //MULTIPLES INPUTS CON SU ESTADO
    // const [name, setName] = useState('');
    // const [edad, setEdad] = useState(0);

    // function handChange (e) {
    //     if(e.target.name === name) {
    //         setName(e.target.value)
    //     } 
    //     if(e.target.value === edad) {
    //         setEdad(e.target.value)
    //     }   
    // }
    // return (
    //     <>
    //         <input type="text" name="name" value={name} onChange={(e) => handChange(e)} />
    //         <input type="number" name="edad" value={edad} onChange={(e) => handChange(e)} />
    //     </>
    // )

    //MULTIPLES INPUTS CON UN ESTADO
    const [input, setInput] = useState({
        nombre: "",
        edad: 0
    })

    function handChange (e) {
        if(e.target.name === nombre) {
            setName({...input, nombre: e.target.value})
        } 
        if(e.target.value === edad) {
            setEdad({...input, edad: e.target.value})
        }   

        // const valueName = e.target.value;
        // const name = e.target.name;
        // setInput({
        //     [name]: valueName, //Sintaxis ES6 para actualizar la key correspondiente
        // })
    }
    return (
        <>
            <input type="text" name="name" value={input.nombre} onChange={(e) => handChange(e)} />
            <input type="number" name="edad" value={input.edad} onChange={(e) => handChange(e)} />
        </>
    )
}
