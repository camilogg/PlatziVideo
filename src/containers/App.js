// import 'babel-polyfill'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initialState/'

const App = () => {
  const initialState = useInitialState(API)
  return (
    <div className='app'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.mylist.map(video => (
              <CarouselItem {...video} key={video.id} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map(video => (
            <CarouselItem {...video} key={video.id} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {initialState.originals.map(video => (
            <CarouselItem {...video} key={video.id} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  )
}

export default App
