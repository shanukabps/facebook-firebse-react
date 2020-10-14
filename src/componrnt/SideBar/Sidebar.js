
import React from 'react'
import SidebarRow from './../SideBarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideocamIcon from '@material-ui/icons/Videocam';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './../contexApi/StateProvider';
import './SideBar.css'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div>
            <div className="sidebar">
                <SidebarRow src={user.photoURL} title={user.displayName} />

                <SidebarRow Icon={LocalHospitalIcon} title="COVD-19 Informaton Center" />
                <SidebarRow Icon={PeopleIcon} title="Friend" />
                <SidebarRow Icon={ChatIcon} title="Messenger" />
                <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
                <SidebarRow Icon={VideocamIcon} title="Video" />
                <SidebarRow Icon={ExpandMoreIcon} />
            </div>
        </div>
    )
}

export default Sidebar
