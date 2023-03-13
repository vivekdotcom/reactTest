import React, { useEffect, useState } from 'react'
// import images from '../assets/1.jpg'
import profile from '../assets/2.jpg'
import './user.css'
import menuIcon from '../assets/3.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

    const [showHide, setShowHide] = useState(false);
    const [pathName, setPathName] = useState(window.location.pathname.slice(1));
    const [Logo, setLogo] = useState("");


    // const url = window.location.pathname;
    // const pName = url.slice(1);
    // setPathName(pName);

    const handleClick = () => {
        if (showHide === false) {
            setShowHide(true)
        } else {
            setShowHide(false)
        }
    }

    useEffect(() => {

        axios.get("https://paul.blueboxonline.com/api/v1/app/settings").then((res) => {
            setLogo(res.data.logo);
        })

    }, [])



    return (
        <>
            <div className="conatiner">
                <div className="left-side">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="right-side">
                    <ul>
                        {
                            pathName === "sign" ? <li className='dis-none'>Home</li> : <li className='dis-none'><Link to='/home'>Home</Link></li>
                        }

                        <li className='dis-none'><Link to="/Report">Report</Link> </li>
                        <li className='dis-none' onClick={handleClick}>
                            <img src={profile} alt="profie" />
                            {
                                showHide ? <ul className='sign-Out'>
                                    <li><Link to='/sign'>Sign Out</Link></li>
                                </ul> : ""
                            }

                        </li>
                        <li className='mob-navbar' onClick={handleClick}><img src={menuIcon} alt="menu" />
                            {
                                showHide ? <ul className='sub-menu'>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><Link to='/Report'>Report</Link></li>
                                    {
                                        pathName === "home" || pathName === "Report" ? <li><Link to='/sign'>Sign Out</Link></li> : ""
                                    }
                                </ul> :
                                    ""
                            }

                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
            {
                pathName === "home" || pathName === "Report" ? "" : <div className='sign-in'>Sign in</div>
            }

        </>
    )
}

export default Register