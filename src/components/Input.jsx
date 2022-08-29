import React, { useState } from 'react'


const Input = (props) => {
    const [nombre, setNombre] = useState('');
    const [contrasena, setContrasena] = useState('');

    const validaPass = (e) => {
        e.preventDefault()
        if (contrasena === "252525") {
            document.querySelector('#btn-submit').style.visibility = "visible";
        }
        if (contrasena !== "252525") {
            document.querySelector('#btn-submit').style.visibility = "hidden";
            e.preventDefault()
        }

    }
    return (
        <div className="form-layout">
            <section className='left'>
                <div>
                    <h1>Desafío estado de los componentes y eventos</h1>
                </div>
                <form action="" onClick={validaPass}>

                    <label>Nombre: </label>
                    <input type="text"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                        placeholder="Nombre"
                    />


                    <label>Contraseña: </label>
                    <input type="text"
                        onChange={(e) => setContrasena(e.target.value)}
                        value={contrasena}
                        placeholder="Contraseña"
                    />
                    <div>
                        <button id='btn-submit'>Submit</button>
                    </div>

                </form>
            </section>
            <section>
                <h1 />
            </section>
        </div>
    )

}

export default Input