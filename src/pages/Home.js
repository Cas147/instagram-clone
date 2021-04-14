import React from 'react'

import Story from '../components/Story'
import Feed from '../components/Feed'
import Suggest from '../components/Suggest'

import '../components/styles/Home.css'

export default function Home(){
    return(
        <div className="Home-container">
            <div className="feed-section">
                <Story></Story>
                <Feed></Feed>
            </div>
            <div className="suggest-section">
                <Suggest></Suggest>
            </div>
        </div>
    )
}