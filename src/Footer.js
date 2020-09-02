import React,{useEffect,useState} from 'react'
import './Footer.css'
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';

import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import {Grid , Slider } from '@material-ui/core';
import {useStateValue} from './Datalayer';


function Footer({spotify}) {
    const [{ token, item, playing }, dispatch] = useStateValue();
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);


      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };

      const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

      const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };
      const track  = () => {
          spotify.get()
      }




    return (
        <div className="footer">
            <div className="footer_left">
            <img className="footer_albumlogo" src={item?.album.images[0].url}
            alt=""/>
            {item?(
              <div className="footer_songinfo">
              <h4><audio src={item?.preview_url}>{item.name}</audio></h4>
              <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
              </div>):(
                  <div className="footer_songinfo">
                  <h4>No song is playing!!</h4>
                  </div>
              )}
            </div>
            
            
            
            <div className="footer_center">
            <ShuffleRoundedIcon className="footer_green"/>
            <SkipPreviousOutlinedIcon onClick={skipPrevious} className="footer_icon"/>
            {playing?(<PauseCircleOutlineIcon 
                onClick={handlePlayPause} 
                fontSize="large" 
                className="footer_icon"/>):(<PlayCircleFilledWhiteOutlinedIcon 
                    onClick={handlePlayPause} 
                    fontSize="large" 
                    className="footer_icon"/>)}
            <SkipNextOutlinedIcon onClick={skipNext} className="footer_icon"/>
            <RepeatRoundedIcon className="footer_green"/>
            </div>
            
            
            
            <div className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                <PlaylistPlayRoundedIcon className="hov"/>
                </Grid>
                <Grid item>
                <VolumeDownRoundedIcon className="hov"/>
                </Grid>
                <Grid item xs>
                <Slider/>
                </Grid>
                <Grid item>
                <VolumeUpRoundedIcon className="hov"/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
export default Footer;
