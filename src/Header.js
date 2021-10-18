import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://pbs.twimg.com/profile_images/1414701557770334215/3VER1FxF_400x400.jpg" title="Me"/>
            </div>
        </div>
    )
}

export default Header
