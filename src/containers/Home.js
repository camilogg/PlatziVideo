// import 'babel-polyfill'
import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
// import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'

// const API = 'http://localhost:3000/initialState/'

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API)
  return (
    <div className='app'>
      <Search isHome />

      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map(video => (
              <CarouselItem {...video} key={video.id} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(video => (
            <CarouselItem {...video} key={video.id} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {originals.map(video => (
            <CarouselItem {...video} key={video.id} />
          ))}
        </Carousel>
      </Categories>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home)
