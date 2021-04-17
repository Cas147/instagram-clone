import React,{useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'


import profileIcon from '../images/user-profile.png'
import saveIcon from '../images/save-icon.png'
import settingsIcon from '../images/setting-icon.png'
import switchIcon from '../images/switch.png'

import './styles/Profile.css'

export default function Likes() {
        return(ReactDOM.createPortal(
            <div className="modal-Profile">
                    <div className="profile-container">
                        <div>
                            <Link to="#" className="profile-links">
                                <img src={profileIcon} alt="user profile icon"/>
                                <span>Profile</span>
                            </Link>
                            <Link to="#" className="profile-links">
                                <img src={saveIcon} alt="user profile icon"/>
                                <span>Saved</span>
                            </Link>
                            <Link to="#" className="profile-links">
                                <img src={settingsIcon} alt="user profile icon"/>
                                <span>settings</span>
                            </Link>
                            <button to="#" className="profile-links">
                                <img src={switchIcon} alt="user profile icon"/>
                                <span>settings</span>
                            </button>
                        </div>
                        <hr></hr>
                        <button to="#" className="profile-links">Log out
                            </button>
                    </div>
                </div>,
            document.getElementById('modal')))
    }