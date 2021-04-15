import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import AngleDown from '../images/512px-Angle_down_font_awesome.svg.png'
import pencilIcon from '../images/pencil-icon.png'
import sentIcon from '../images/sent-icon.png'

import '../components/styles/Direct.css'

export default function Direct() {
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
    return(
        <div className="message-container">
            <div className="message-user-container">
                <div className="message-user">
                    <button className="angle-down">UserNameee <img src={AngleDown} alt="angle down"/></button>
                    <button className="pencil-button"><img src={pencilIcon} alt="angle down"/></button>
            </div>
                <div className="friends-list-container">
                    <ul>
                    {list.map(item => (
                            <button className="friends-list">
                                <img className="friends-img" src={item.download_url} alt="Friend-img"/>
                                <div>
                                    <p className="name-friend">{item.author}</p>
                                    <p className="state-friend">{item.author}</p>
                                </div>
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-message-container">
                    <div className="text-img-container">
                        <img className="text-img" src={sentIcon} alt="send icon"/>
                    </div>
                    <p>Your Messages</p>
                    <h5>Send private photos and messages to a friend or group.</h5>
                    <button>Send Message</button>
                </div>
        </div>
    )
}