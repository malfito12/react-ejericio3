import axios from 'axios'
import React from 'react'

const autenthication=e=>{
    e.preventDefault()
    const form=e.target

    const data={
        "email": form.email.value,
        "passowrd": form.pass.value
    }

    axios.post('http://192.168.100.6:4000/service/login', data)
    .then(resp=>console.log(resp))
    .catch(err=>console.log(err))
}

const Login =()=>{
    return(
        <div className='ed-grid'>
            <div className='l-block'></div>
            <div className='m-to-center m-60 lg-30'>
                <h1 className='center'>iniciar Sesion</h1>
                <form onSubmit={autenthication.bind()}>
                    <div className='form__item'>
                        <label htmlFor="email">
                            correo electronico
                            <input type="email" name='email' id='email' placeholder='ingrese su email' required />
                        </label>
                    </div>
                    <div className='form__item'>
                        <label htmlFor="password">
                            Contraseña
                            <input type="password" name='pass' id='password' placeholder='ingrese su contraseña' required />
                        </label>
                    </div>
                    <div>
                        <input type="submit" className='button full ' value='aceptar'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login