import React from 'react'

import NotFound from './NotFound';

const AllRoute = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={ <Banner />}/>
           <Route path='*' element={ <NotFound/>}/>

           
        </Routes>
    </div>
  )
}

export default AllRoute


