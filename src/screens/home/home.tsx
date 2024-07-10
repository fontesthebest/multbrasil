import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './home.css';
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";


function Home() {
  return (
    <div className="Home">
      <h1 className='title'>Find Jobs</h1>
      <div className='menu-principal'>
        <a href="">Discover</a>
        <a href="">Saved</a>
        <a href="">Applied</a>
      </div>
      <div className='rollsearch'>
        <input type="text" className='pesquisar' placeholder='Search for company or roles'/>
        <button className='filter'><FaFilter/></button>
      </div>
      <ul className='list-cards'>
        <li className='card-premium'>
          <div className='card'>
            <div id='img2'></div>
            <div className='card-title'>
              <h2>Sr. UX Designer</h2>
              <p>Google</p>
            </div>
            <Link to='/view'>View <FaArrowUpRightDots/></Link>
            
          </div>
          <div className='card-inf'>
              <p><FaLocationDot/> New York</p> <p><IoSchoolSharp/> 3 years exp.</p> <p><FaClock/> Fulltime</p>
            </div>
            <div className='description'>
              <p>UX Designers are the synthelsis of design and development. They take Google's most innovative product concpts...</p>
            </div>
          <div className='card-bottom'>
            <p>Posted 2 days ago</p>
            <h3>$50K/mo</h3>
          </div>
        </li>
        <li className='card-gold'>
          <div className='card'>
            <div id='img2'></div>
            <div className='card-title'>
              <h2>Sr. UX Designer</h2>
              <p>Google</p>
            </div>
            <a href="">View <FaArrowUpRightDots/></a>
           
          </div>
          <div className='card-inf'>
              <p><FaLocationDot/> New York</p> <p><IoSchoolSharp/> 3 years exp.</p> <p><FaClock/> Fulltime</p>
            </div>
            <div className='description'>
              <p>UX Designers are the synthelsis of design and development. They take Google's most innovative product concpts...</p>
            </div>
          <div className='card-bottom'>
            <p>Posted 2 days ago</p>
            <h3>$50K/mo</h3>
          </div>
        </li>
        <li className='card-basic'>
          <div className='card'>
            <div id='img2'></div>
            <div className='card-title'>
              <h2>Sr. UX Designer</h2>
              <p>Google</p>
            </div>
            <a href="">View <FaArrowUpRightDots/></a>  
          </div>
          <div className='card-inf'>
              <p><FaLocationDot/> New York</p> <p><IoSchoolSharp/> 3 years exp.</p> <p><FaClock/> Fulltime</p>
            </div>
            <div className='description'>
              <p>UX Designers are the synthelsis of design and development. They take Google's most innovative product concpts...</p>
            </div>
          <div className='card-bottom'>
            <p>Posted 2 days ago</p>
            <h3>$50K/mo</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Home;
