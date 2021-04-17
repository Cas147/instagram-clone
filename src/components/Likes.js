import React,{useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

import './styles/Likes.css'

export default function Likes() {
        return(ReactDOM.createPortal(
            <div className="modal">
                    <div className="likes-container">
                        <div>
                            <h6>This Week</h6>
                            <div className="notification">
                                <img src="https://picsum.photos/30/" alt="user-notification"/>
                                <p><Link className="Link-username">Usernameee</Link> Started following you</p>
                                <button>Follow</button>
                            </div>
                            <hr></hr>
                            <h6>This Month</h6>
                            <div className="notification">
                                <img src="https://picsum.photos/30/" alt="user-notification"/>
                                <p><Link className="Link-username">Usernameee</Link> Started following you</p>
                                <button>Follow</button>
                            </div>
                            <div className="notification">
                                <img src="https://picsum.photos/30/" alt="user-notification"/>
                                <p><Link className="Link-username">Usernameee</Link> Started following you</p>
                                <button>Follow</button>
                            </div>
                            <div className="notification">
                                <img src="https://picsum.photos/30/" alt="user-notification"/>
                                <p><Link className="Link-username">Usernameee</Link> Started following you</p>
                                <button>Follow</button>
                            </div>
                            <div className="notification">
                                <img src="https://picsum.photos/30/" alt="user-notification"/>
                                <p><Link className="Link-username">Usernameee</Link> Started following you</p>
                                <button>Follow</button>
                            </div>
                        </div>

                    </div>
                </div>,
            document.getElementById('modal')))
    }
