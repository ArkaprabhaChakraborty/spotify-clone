import { useEffect } from 'react';
import React from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenfromURl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from './Datalayer';


const spotify = new SpotifyWebApi();

function App() {
  const [{user,token}, dispatch] = useStateValue()


  useEffect(() => { 
    const hash = getTokenfromURl();
    window.location.hash= "";
    const _token = hash.access_token;
    
    if(_token)
    {
      dispatch({
        type:"SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token); 
      spotify.getMe().then((user)=>{ //gets the user
        console.log("user",user);
        dispatch({ //pops in user to the data layer
          type: 'SET_USER',
          user: user
        });
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getUserPlaylists().then((playlists)=>{dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists
      });
    });
    spotify.getMyTopArtists().then((response) =>
    dispatch({
      type: "SET_TOP_ARTISTS",
      top_artists: response,
    })
  );
    spotify.getPlaylist('37i9dQZF1DWY1kDGbdPb81').then(response =>dispatch({
      type:'SET_DISCOVER_WEEKLY',
      discover_weekly: response
    })
    )}
  }, []);



  return (
    <div className="App">
    {
     token ?(<Player spotify = {spotify}/>):(<Login />)
    }
    </div>
  );
}

export default App;
