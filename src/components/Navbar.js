import React from  'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import instagramLogo from '../images/instagram-logo.png';
import homeIocn from '../images/home-icon.png';
import messageIocn from '../images/message-icon.png';
import discoverIocn from '../images/discover-icon.png';
import heartIcon from '../images/heart-icon.png';
import userIocn from '../images/User-png.png';

import './styles/Navbar.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    paper: {
      Width: '100%',
      height: '54px',
      backgroundColor:'white',
      border:'1px solid #dbdbdb',
      display:'flex',
      position:'sticky',
      top:0,
    },
    instagramLogo:{
        width:'7em',
        height:'60%',
        marginTop:'12px'
    },
    logoContainer:{
        width:'40%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    TextField:{
        backgroundColor:'#fafafa',
        height:'30px',
        width:'15em',
    },
    IconsContainer:{
        display:'flex',
        margin:'auto auto'
    },
    Icons:{
        height:'25px',
        width:'25px',
        padding:10
    }
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <div className={classes.logoContainer}>
                <Link  to='#'>
                    <img className={classes.instagramLogo} src={instagramLogo} alt="Logo"></img>
                </Link>
            </div>
            <div className="search--Container">
                <FormControl>
                <input className='searcher'
                    id="outlined-basic"
                    variant="outlined"
                    name="firstName"
                    autoComplete='off'
                    placeholder='Search'
                    variant="outlined"
        />
                </FormControl>
            </div>
            <div className={classes.IconsContainer}>
                <Link to='#'>
                    <img className={classes.Icons} src={homeIocn} alt="Home"></img>
                </Link>
                <Link to='#'>
                    <img className={classes.Icons} src={messageIocn} alt="Messages"></img>
                </Link>
                <Link to='#'>
                    <img className={classes.Icons} src={heartIcon} alt="Notifications"></img>
                </Link>
                <Link to='#'>
                    <img className={classes.Icons} src={discoverIocn} alt="Discover-people"></img>
                </Link>
                <Link to='#'>
                    <img className={classes.Icons} src={userIocn} alt="Discover-people"></img>
                </Link>
            </div>
        </div>
    )
}

