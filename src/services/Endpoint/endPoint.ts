import { PLAYLIST_ID, USER_ID } from "../../configs"

const ADD_ITEM_TO_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`
const CREATE_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/users/${USER_ID}/playlists`
const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search`
const DEL_ITEM_FROM_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`
const ID_DEVICES_ENDPOINT = `https://api.spotify.com/v1/me/player/devices`
const GET_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`
const USER_ID_ENDPOINT = `https://api.spotify.com/v1/me`
const PAUSE_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/pause`
const REPEAT_ENDPOINT = `https://api.spotify.com/v1/me/player/repeat`
const SKIP_ENDPOINT = `https://api.spotify.com/v1/me/player/next`
const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`
const START_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`
const GET_PLAYLIST_COVER_IMAGE_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/images`


export {GET_PLAYLIST_COVER_IMAGE_ENDPOINT, START_TRACK_ENDPOINT, START_RESUME_PLAYBACK_ENDPOINT , SKIP_ENDPOINT, REPEAT_ENDPOINT, PAUSE_PLAYBACK_ENDPOINT, USER_ID_ENDPOINT, RECENTLY_PLAYED_ENDPOINT, GET_PLAYLIST_ENDPOINT, ID_DEVICES_ENDPOINT, ADD_ITEM_TO_PLAYLIST_ENDPOINT, CREATE_PLAYLIST_ENDPOINT, SEARCH_ENDPOINT, DEL_ITEM_FROM_PLAYLIST_ENDPOINT}