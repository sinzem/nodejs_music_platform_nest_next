import { ITrack } from "./track";


export interface PlayerState { /* (типизируем состояния для плеера) */
    active: null | ITrack; 
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
}

export enum PlayerActionTypes { /* (перечисляем actions(enum)) */
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_ACTIVE = "SET_ACTIVE",
    SET_DURATION = "SET_DURATION",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_VOLUME = "SET_VOLUME"
}

/* (интерфейсы для вышеперечисленных экшнов, также типизируем дополнительные данные, которые будут приходить для выполнения этого действия(payload)) */
interface PlayAction {
    type: PlayerActionTypes.PLAY
}
interface PauseAction {
    type: PlayerActionTypes.PAUSE
} 
interface SetActiveAction {
    type: PlayerActionTypes.SET_ACTIVE,
    payload: ITrack;
}
interface SetDurationAction {
    type: PlayerActionTypes.SET_DURATION,
    payload: number;
}
interface SetVolumeAction {
    type: PlayerActionTypes.SET_VOLUME,
    payload: number;
}
interface SetCurrentTimeAction {
    type: PlayerActionTypes.SET_CURRENT_TIME,
    payload: number
}

/* (экспортируем все вышесозданные интерфейсы как один тип) */
export type PlayerAction = 
    PlayAction
    | PauseAction
    | SetActiveAction
    | SetDurationAction
    | SetVolumeAction
    | SetCurrentTimeAction