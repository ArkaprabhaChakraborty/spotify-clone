import React from 'react'
import './SongRow.css'
function SongRow({track, playSong}) {



    return (
        <div className="songrow" onClick={() => playSong(track.id)}>
        <img className="songrow_album"src ={track.album.images[0].url} alt=""/>
            <div className="songrow_info">
            <h1>{track.name}</h1>
            <p>{track.artists.map((artist) =>artist.name).join(", ")} -{" "}
            {track.album.name}
            </p>
            <audio src={track?.preview_url}></audio>
            </div>
            
        </div>
    )
}

export default SongRow
