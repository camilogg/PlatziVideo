import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { searchFilter } from '../actions'
import '../assets/styles/components/Search.scss'

const Search = ({ isHome, searchFilter }) => {
  const inputStyle = classNames('input', {
    isHome,
  })

  const handleChange = e => {
    searchFilter(e.target.value)
  }

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleChange}
      />
    </section>
  )
}

const mapDispatchToProps = {
  searchFilter,
}

export default connect(null, mapDispatchToProps)(Search)
