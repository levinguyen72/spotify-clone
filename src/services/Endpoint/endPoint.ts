import { PLAYLIST_ID, TYPE, USER_ID } from "../../configs"

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
const GET_NEW_RELEASES_ENDPOINT = `https://api.spotify.com/v1/browse/new-releases`
const GET_RECOMMENDATIONS_ENDPOINT = `https://api.spotify.com/v1/recommendations`
const GET_CURRENTLY_PLAYING_TRACK = `	https://api.spotify.com/v1/me/player/currently-playing`
const GET_USER_TOP_ITEMS = `https://api.spotify.com/v1/me/top/${TYPE}`
const GET_SEVERAL_SHOWS_ENDPOINT = `https://api.spotify.com/v1/shows`
const GET_SEVERAL_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/artists`
const AVAILABLE_GENRE_SEEDS = `https://api.spotify.com/v1/recommendations/available-genre-seeds`
const GET_SEVERAL_BROWSE_CATEGORIES_ENDPOINT = `https://api.spotify.com/v1/browse/categories`
const GET_CURRENT_USER_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/me/playlists`
const GET_USER_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/users/${USER_ID}/playlists`
const GET_USER_SAVED_ALBUMS_ENDPOINT = `https://api.spotify.com/v1/me/albums`



export {GET_USER_SAVED_ALBUMS_ENDPOINT, GET_USER_PLAYLIST_ENDPOINT, GET_CURRENT_USER_PLAYLIST_ENDPOINT, GET_SEVERAL_BROWSE_CATEGORIES_ENDPOINT, AVAILABLE_GENRE_SEEDS, GET_SEVERAL_ARTISTS_ENDPOINT, GET_SEVERAL_SHOWS_ENDPOINT, GET_USER_TOP_ITEMS, GET_CURRENTLY_PLAYING_TRACK, GET_RECOMMENDATIONS_ENDPOINT, GET_NEW_RELEASES_ENDPOINT, GET_PLAYLIST_COVER_IMAGE_ENDPOINT, START_TRACK_ENDPOINT, START_RESUME_PLAYBACK_ENDPOINT , SKIP_ENDPOINT, REPEAT_ENDPOINT, PAUSE_PLAYBACK_ENDPOINT, USER_ID_ENDPOINT, RECENTLY_PLAYED_ENDPOINT, GET_PLAYLIST_ENDPOINT, ID_DEVICES_ENDPOINT, ADD_ITEM_TO_PLAYLIST_ENDPOINT, CREATE_PLAYLIST_ENDPOINT, SEARCH_ENDPOINT, DEL_ITEM_FROM_PLAYLIST_ENDPOINT}