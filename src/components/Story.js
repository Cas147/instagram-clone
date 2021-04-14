import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom'

import './styles/Story.css'

const histories=[
    {id:1,userName:'user1', photo:'https://picsum.photos/60/60'},
    {id:2,userName:'user2', photo:'https://picsum.photos/60/60'},
    {id:3,userName:'user3', photo:'https://picsum.photos/60/60'},
    {id:4,userName:'user5', photo:'https://picsum.photos/60/60'},
    {id:5,userName:'user6', photo:'https://picsum.photos/60/60'},
    {id:6,userName:'user7', photo:'https://picsum.photos/60/60'},
    {id:7,userName:'user8', photo:'https://picsum.photos/60/60'},
    {id:8,userName:'user9', photo:'https://picsum.photos/60/60'},
    {id:9,userName:'user10', photo:'https://picsum.photos/60/60'},
    {id:10,userName:'user11', photo:'https://picsum.photos/60/60'},
    {id:11,userName:'user12', photo:'https://picsum.photos/60/60'},
    {id:12,userName:'user13', photo:'https://picsum.photos/60/60'},
    {id:13,userName:'user14', photo:'https://picsum.photos/60/60'},
    {id:14,userName:'user15', photo:'https://picsum.photos/60/60'},
    {id:15,userName:'user16', photo:'https://picsum.photos/60/60'},
    {id:16,userName:'user17', photo:'https://picsum.photos/60/60'},
    {id:17,userName:'user18', photo:'https://picsum.photos/60/60'},
    {id:18,userName:'user19', photo:'https://picsum.photos/60/60'},
    {id:19,userName:'user20', photo:'https://picsum.photos/60/60'},


]

export default function Histories(){
    let settings = {
        infinite: false,
        arrow:true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 4,
        className:"slides",
        responsive:[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 4,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                initialSlide: 2
              }
            },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },]
    };
    return(
        <div className="container">
            <Slider {...settings} >
                {histories.map(item=> {
                    return (
                        <div>
                            <div key={item.id} className="image-container">
                             <Link className="link-story">
                                <img className="img-history" src={item.photo} alt="histories" />
                                <p className="userName-story">{item.userName}</p>
                             </Link>

                            </div>
                        </div>
                );
            })}
            </Slider>
        </div>
    )
}