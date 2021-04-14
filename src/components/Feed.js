import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


import infoIcon from '../images/points-icon.png'
import heartIcon from '../images/heart-icon.png'
import chatIcon from '../images/chat-bubble.png'
import DiscoverIcon from '../images/discover-icon.png'
import MarBookIcon from '../images/markbook.png'
import EmoticonIcon from '../images/emoticon-icon.png'
import './styles/Feed.css'

export default function Feed(){
    const [list, setList] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios({
            url: "https://picsum.photos/v2/list",
          });

          setList(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, [setList]);
    console.log(list)
    return(
        <ul>
            {list.map(item => (
            <li key={item.id} className="feed-container">
                <div className="feed-post-container">
                    <div className="feed-info-container">
                        <div className="feed-info">
                            <Link >
                                <img className="img-feed-info" src='https://picsum.photos/30/30' alt="stories" />
                            </Link>
                            <Link className="link-user">
                                <p className="user-name-post">{item.author}</p>
                            </Link>
                        </div>
                        <Link className="icon-more" to="#">
                            <img className="icon" src={infoIcon} alt="info-icon" />
                        </Link>
                    </div>
                    <div>
                        <img className="img-feed-post" src={item.download_url} alt="histories" />
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
                        <p className="number-likes">{item.height} Likes</p>
                    </div>
                    <div>
                        <p className="Description-post"> <b>{item.author}  </b>{item.download_url}</p>
                    </div>
                    <div className="comment-container">
                        <button className="emoticon-button">
                            <img className="icons-section" src={EmoticonIcon} alt="emoticons" />
                        </button>
                        <textarea className='comment-input'
                        id="outlined-basic"
                        variant="outlined"
                        name="firstName"
                        autoComplete='off'
                        placeholder='Add a comment...'
                        variant="outlined"
                        />
                        <button className="post-button">
                            Post
                        </button>
                    </div>
                </div>
            </li>
            ))}
        </ul>
    )
}