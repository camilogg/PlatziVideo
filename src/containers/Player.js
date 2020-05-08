import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getVideoSoruce } from '../actions'
import '../assets/styles/components/Player.scss'

const Player = ({ match, playing, history, getVideoSoruce }) => {
  const { id } = match.params
  const hasPlaying = Object.keys(playing).length > 0
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getVideoSoruce(id)
    setLoading(false)
  }, [])

  const handleClick = () => {
    history.goBack()
  }

  return loading ? (
    <h1>Cargando...</h1>
  ) : hasPlaying ? (
    <>
      <div className='Player'>
        <video controls autoPlay>
          <source src={playing.source} type='video/mp4' />
        </video>
      </div>
      <div className='Player-back'>
        <button type='button' onClick={handleClick}>
          Regresar
        </button>
      </div>
    </>
  ) : (
    // setTimeout(<Redirect to='/404/' />, 0)
    <Redirect to='/404/' />
  )
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSoruce,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
