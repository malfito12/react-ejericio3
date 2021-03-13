import React, { createRef } from 'react'
import { NavLink } from 'react-router-dom'

const menu=createRef()
const toggleMenu=()=>{
    menu.current.classList.toggle('show')
}

const Header = () => (
    <header className='main-header'>
        <div className='ed-grid s-grid-5 lg-grid-4'>
            <div className='s-cols-4 lg-cols-1 s-cross-center'>
                <NavLink to='/'>
                    <img 
                    src="https://ux.ed.team/img/edteam-ux.svg" 
                    alt="edlogo"
                    className='main-logo'/>
                </NavLink>
            </div>
            <div className='s-cols-1 lg-cols-3 s-cross-center s-main-end'>
                <nav className='main-menu' ref={menu}>
                    <ul>
                        <li><NavLink exact to='/'>Inicio</NavLink></li>
                        <li><NavLink to='/specialities'>Especialidades</NavLink></li>
                        <li><NavLink to='/courses'>Cursos</NavLink></li>
                        <li><NavLink to='/teacher'>Profesores</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" onClick={()=> toggleMenu()}>

                </div>
            </div>
        </div>
    </header>
)

export default Header
