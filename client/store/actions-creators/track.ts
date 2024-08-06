import { TrackAction, TrackActionTypes } from "@/types/track"
import axios from "axios"
import { Dispatch } from "react"


export const fetchTracks = () => { /* (функция для получения треков - гет-запрос на сервер) */
    return async (dispatch: Dispatch<TrackAction>) => { /* (возвращает асинхронную функцию, которая аргументом примет dispatch с соответствующим типом) */
        try {
            const response = await axios.get("http://localhost:5000/tracks"); /* (делаем запрос на сервер) */
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data}); /* (записываем ответ в состояния) */
        } catch (e) { /* (в случае ошибки в состояния записываем сообщение) */
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Произошла ошибка при загрузек треков"})
        }
    }
}

export const searchTracks = (query: string) => { /* (для поиска треков по имени) */
    return async (dispatch: Dispatch<TrackAction>) => { 
        try {
            const response = await axios.get("http://localhost:5000/tracks/search?query=" + query);  /* (добавляем участок пути с именем трека для поиска(придет пропсом)) */
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
        } catch (e) { 
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Произошла ошибка при загрузек треков"})
        }
    }
}