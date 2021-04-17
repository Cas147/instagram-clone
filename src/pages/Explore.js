import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import likeIcon from '../images/heart-white.png'
import commentIcon from '../images/white-chat-icon-27.jpg'
import '../components/styles/Explore.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Explore () {
    const classes = useStyles();
    return(
        <div className="explore-grid-contianer">
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/0/5616/3744" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>

                <Grid item xs={8}>
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-bigPost" src="https://picsum.photos/id/1003/1181/1772" alt="post img"></img>
{/*                             <div className="hover-bigPost">
                                <img className="likes-bigImg" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-bigImg" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div> */}
                    </Link>
                    </div>
                </Grid>

                <Grid item xs={4} >
                <div className="post-container post-cont">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/1002/4312/2868" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/1001/5616/3744" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/1000/5626/3635" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/100/2500/1656" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/10/2500/1667" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/1/5616/3744" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={4} >
                <div className="post-container">
                    <Link  to="#">
                        <img className="img-post" src="https://picsum.photos/id/1025/4951/3301" alt="post img"></img>
                            <div className="hover-post">
                                <img className="likes-img" src={likeIcon} alt="like icon" />
                                <span>1.2k</span>
                                <img className="likes-img" src={commentIcon} alt="comments icon" />
                                <span>5.2k</span>
                        </div>
                    </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}