import React, { useEffect, useState, useRef } from 'react';
import DarkMode from "../DarkMode/DarkMode";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const scrollTop = window.scrollY;
                const offsetTop = navRef.current.offsetTop;
                setIsSticky(scrollTop > offsetTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={navRef}
            className={`navbar ${isSticky ? 'sticky' : ''}`}
        >
            <div className="logo">
            <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" /></Link>    
            </div>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="tv-show">TV Shows</Link>
                <Link to="movies">Movies</Link>
                <Link to="new">New & Popular</Link>
                <Link to="list">My List</Link>
            </div>

            <DarkMode />

            <div className="profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" />
            </div>
        </div>
    );
};

export default Navbar;
