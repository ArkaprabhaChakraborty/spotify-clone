export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirect = "http://192.168.56.112:3000/";
const cid = "ee6111c95d8542a4bd00d59476856aaa";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
export const loginurl = `${authEndpoint}?client_id=${cid}&redirect_uri=${redirect}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const getTokenfromURl = () => { return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
}, {});}