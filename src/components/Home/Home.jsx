import React from 'react'
import Banner from './Banner'
import Content from '../Content'
import MovieList from '../MovieList/MovieList'
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Content /> */}

            <MovieList type='popular' title='Popular' emoji={Fire} />
            <MovieList type='top_rated' title='Top Rated' emoji={Star} />
            <MovieList type='upcoming' title='Upcoming' emoji={Party} /></div>
    )
}

export default Home