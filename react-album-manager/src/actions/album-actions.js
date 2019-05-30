import { albums } from '../album-data';

export function fetchAlbums(){
    return dispatch => {
        dispatch({
            type: 'FETCH_ALBUMS',
            payload: albums
        })
    }
}