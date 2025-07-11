import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import './App.css'
import NotFound from './components/NotFound';
import Home from './components/Home/Home';
import SingleMovie from './components/MovieList/SingleMovie';

const App = () => {
  return (
    <>


      <div className='app'>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/movie/:movieId' element={<SingleMovie  />} />



        </Routes>

      </div>

    </>
  )
}

export default App