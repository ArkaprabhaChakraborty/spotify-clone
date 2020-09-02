import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useStateValue } from './Datalayer';

function Sidebar() {


    const [{playlists},dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <img className ="sidebar_logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvWDyQ4hC-MOaavod-2DoXQ0tfGLpSrcq3xw&usqp=CAU" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvWDyQ4hC-MOaavod-2DoXQ0tfGLpSrcq3xw&usqp=CAU"/>
            <SidebarOptions Icon ={HomeOutlinedIcon} title="Home" />
            <SidebarOptions Icon={SearchOutlinedIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicOutlinedIcon} title="Your Library"/>
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>
            { playlists?.items?.map(playlist =>(
                <SidebarOptions title= {playlist.name}/>
            ))}
        </div>
    );
}

export default Sidebar
