import React,{useState,useEffect,useRef} from  'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import instagramLogo from '../images/instagram-logo.png';
import homeIocn from '../images/home-icon.png';
import messageIocn from '../images/message-icon.png';
import discoverIocn from '../images/discover-icon.png';
import heartIcon from '../images/heart-icon.png';
import userIocn from '../images/User-png.png';

import Likes from './Likes'
import './styles/Navbar.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    container:{
        position:'sticky',
        top:0,
    },

    paper: {
      height: '54px',
      backgroundColor:'white',
      border:'1px solid #dbdbdb',
      display:'flex',

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

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        if(buttonClicked===false){
            setButtonClicked(true)
        }
        if(buttonClicked===true){
            setButtonClicked(false)
        }

    }
    let likeRef=useRef();
 /*    const [buttonClicked, setButtonClicked] = useState(true);

    useEffect(()=>{
        document.addEventListener("mousedown",(event)=>{
            if(!likeRef.current.contains(event.target)){
                setButtonClicked(false)
            }
        });
    }); */


    return (
        <div className={classes.container}>
            <div className={classes.paper} width={1}>
                <div className={classes.logoContainer}>
                    <Link  to='/'>
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
                    <Link to='/'>
                        <img className={classes.Icons} src={homeIocn} alt="Home"></img>
                    </Link>
                    <Link to='/direct/inbox/'>
                        <img className={classes.Icons} src={messageIocn} alt="Messages"></img>
                    </Link>
                    <Link to='/explore'>
                        <img className={classes.Icons} src={discoverIocn} alt="Discover-people"></img>
                    </Link>
                    <button className="button-heart"  onClick={handleButtonClick}>
                        <img className={classes.Icons} src={heartIcon} alt="Notifications"></img>
                    </button>

                    <button className="button-navBar">
                        <img className={classes.Icons} src={userIocn} alt="Discover-people"></img>
                    </button>
                </div>
            </div>
                <div  className="likes-nav-container" >
                    {  buttonClicked ?  <Likes></Likes> : null}
                    {/* <Likes></Likes> */}
                </div>
        </div>

    )
}

