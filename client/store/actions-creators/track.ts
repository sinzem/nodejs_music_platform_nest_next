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