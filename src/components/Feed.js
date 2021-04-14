import React from 'react';
import {Link} from 'react-router-dom';


import infoIcon from '../images/points-icon.png'
import heartIcon from '../images/heart-icon.png'
import chatIcon from '../images/chat-bubble.png'
import DiscoverIcon from '../images/discover-icon.png'
import MarBookIcon from '../images/markbook.png'
import './styles/Feed.css'

export default function Feed(){
    return(
        <div className="feed-container">
            <div className="feed-post-container">
                <div className="feed-info-container">
                    <div className="feed-info">
                        <Link >
                            <img className="img-feed-info" src='https://picsum.photos/30/30' alt="histories" />
                        </Link>
                        <Link className="link-user">
                            <p className="user-name-post">User nameeee</p>
                        </Link>
                    </div>
                    <Link className="icon-more" to="#">
                        <img className="icon" src={infoIcon} alt="info-icon" />
                    </Link>
                </div>
                <div>
                    <img className="img-feed-post" src='https://picsum.photos/560/600' alt="histories" />
                </div>
                <div className="section-icons">
                    <button className="button-section">
                        <img className="icons-section" src={heartIcon} alt="like" />
                    </button>
                    <Link>
                        <img className="icons-section" src={chatIcon} alt="chat icon" />
                    </Link>
                    <Link>
                        <img className="icons-section" src={DiscoverIcon} alt="discover icon" />
                    </Link>
                    <button className="button-section">
                        <img className="mark-button" src={MarBookIcon} alt="mark" />
                    </button>
                </div>
                <div>
                    <p className="number-likes">1000 Likes</p>
                </div>
                <div>
                    <p className="Description post">1000 Likes</p>
                </div>
            </div>
        </div>
    )
}