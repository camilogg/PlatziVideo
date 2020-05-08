import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import '../assets/styles/components/Register.scss'

const Register = props => {
  const [form, setForm] = useState({})

  const handleInput = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.registerRequest(form)
    props.history.push('/')
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleInput}
            autoComplete='off'
          />
          <input
            className='input'
            type='email'
            placeholder='Correo'
            name='email'
            onChange={handleInput}
            autoComplete='off'
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleInput}
          />
          <button type='submit' className='button'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register)
