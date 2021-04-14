import React from 'react'
import {Link} from 'react-router-dom'

import UserIcon from '../images/User-png.png'
import Footer from './Footer'

import './styles/Suggest.css'

export default function Suggest (){
    return(
        <div className="suggest-container">
            <div className="myInfo-container">
                <Link>
                    <img className="User-img" src={UserIcon} alt="user"/>
                </Link>
                <div className="user-info-container">
                    <Link className="user-name-link">MyUserNameeeee</Link>
                    <p className="user-descriptiom">My Descriptiooon</p>
                </div>
                <button className="switch-button">Switch</button>
            </div>
            <div className="suggestion-to-you">
                <p className="suggest">Suggestions For You</p>
                <Link className="suggest-link">See All</Link>
            </div>
            <div className="myInfo-container">
                <Link>
                    <img className="Suggest-img" src={UserIcon} alt="user"/>
                </Link>
                <div className="user-suggest-container">
                    <Link className="user-suggest-link">UserNameeeee</Link>
                </div>
                <button className="switch-button">Follow</button>
            </div>
            <div className="myInfo-container">
                <Link>
                    <img className="Suggest-img" src={UserIcon} alt="user"/>
                </Link>
                <div className="user-suggest-container">
                    <Link className="user-suggest-link">UserNameeeee</Link>
                </div>
                <button className="switch-button">Follow</button>
            </div>
            <div className="myInfo-container">
                <Link>
                    <img className="Suggest-img" src={UserIcon} alt="user"/>
                </Link>
                <div className="user-suggest-container">
                    <Link className="user-suggest-link">UserNameeeee</Link>
                </div>
                <button className="switch-button">Follow</button>
            </div>
            <div className="myInfo-container">
                <Link>
                    <img className="Suggest-img" src={UserIcon} alt="user"/>
                </Link>
                <div className="user-suggest-container">
                    <Link className="user-suggest-link">UserNameeeee</Link>
                </div>
                <button className="switch-button">Follow</button>
            </div>
            <Footer/>
        </div>
    )
}