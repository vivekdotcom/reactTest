import React, { useEffect, useState } from 'react'
// import images from '../assets/1.jpg'
import profile from '../assets/2.jpg'
import './Register.css'
import menuIcon from '../assets/3.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
    const [showHide, setShowHide] = useState(false);
    const [Logo, setLogo] = useState("");

    const urldata = window.location.pathname;
    console.log(urldata)

    const handleClick = ()=>{
        if(showHide===false){
            setShowHide(true)
        }else{
            setShowHide(false)
        }
    }

    useEffect(()=>{

        axios.get("https://paul.blueboxonline.com/api/v1/app/settings").then((res)=>{
            setLogo(res.data.logo);
        })

    }, [])



  return (
    <>
    <div className="conatiner">
     <div className="left-side">
         <img src={Logo} alt="Logo"/>
     </div>
     <div className="right-side">
        <ul>
            <li className='dis-none'>Home</li>
            <li className='dis-none'>Report</li>
            <li className='dis-none'>
                <img  src={profile} alt="profie"/>
            </li>
            <li className='mob-navbar' onClick={handleClick}><img src={menuIcon} alt="menu"/>
            {
                showHide?<ul className='sub-menu'>
                <li><Link to="/Home">
                    Home</Link>
                    </li>
                <li><Link to="/Report">
                    Report</Link></li>
            </ul>:
            ""
            }
            
            </li>
            <li></li>
        </ul>
     </div>
    </div>
    <div className='sign-in'>Sign in</div>
    </>
  )
}

export default Register