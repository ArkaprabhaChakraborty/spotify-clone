export const initialState = {
    user: null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly:null,
    top_artists: null,
    spotify:null,
    //remove token value after development
    token:null//"BQC_gTMHnY1kuNfTh49tZqpAlRxLBYJeQSOpqfE0iBIv7gVN5jF-roNeJh0KQsBea_VIea6mDSKTyJwp8R4SEIomrv0je2jbm7tpUpvf_ClxcqFWryGl6zq8XeyyALRz7Zwt-YSQsDZYlF3lnrkjISdcRMDSeSHNp_L8ucIOnUHaU3dO"
};
const reducer = (state,action) => {
    console.log(action);
    switch(action.type)
    {
        case 'SET_USER': return{...state,user:action.user};
        case 'SET_TOKEN': return{...state,token:action.token};
        case 'SET_PLAYLISTS':return{...state,playlists:action.playlists};
        case 'SET_DISCOVER_WEEKLY':return{...state,discover_weekly:action.discover_weekly};
        case 'SET_TOP_ARTISTS':return{...state,top_artists:action.top_artists};
        case 'SET_PLAYING':return{...state,playing:action.playing};
        case 'SET_ITEM':return{...state,item:action.item};
        case 'SET_SPOTIFY':return{...state,spotify:action.spotify}; 
        default: return state;
    }
}
export default reducer;