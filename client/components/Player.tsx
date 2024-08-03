import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from '../styles/Player.module.scss';
import { ITrack } from "@/types/track";
import TrackProgress from "./TrackProgress";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";
import React, { useEffect } from "react";

let audio: any;

/* (создаем плеер, добавляем в лайаут) */
const Player = () => {
    
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player); /* (получаем состояния для плеера) */
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions(); /* (подключаем нужные экшнкриэйтеры) */

    useEffect(() => {
        if (!audio) {
            audio = new Audio(); /* (создаем обьект для работы с аудио) */
        } else {
            setAudio();
            play();
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = active.audio; /* (путь к треку) */
            audio.volume = volume / 100; /* (громкость при запуске - по умолчанию 50, но в обьекте Audio шкала от 0 до 1, поэтому делим на 100) */
            audio.onloadedmetadata = () => { /* (после загрузки трека получаем его продолжительность) */
                let dur = Number((audio.duration / 60).toFixed(2))
                setDuration(dur)
            }  
            audio.ontimeupdate = () => { /* (встроенный метод для получения текущего времени трека) */
                let time = Number((audio.currentTime / 60).toFixed(2))
                setCurrentTime(time) /* (записываем в состояния) */
            }
        }
    }

    const play = () => { /* (функция для кнопки play/pause - при нажатии запускает соответствующий экшнкриэйтер) */
        if (pause) {
            playTrack();
            audio.play(); /* (всторенная функция для работы с обьектом Audio) */
        } else {
            pauseTrack();
            audio.pause(); /* (всторенная функция для работы с обьектом Audio) */
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => { /* (для изменения громкоости) */
        audio.volume = Number(e.target.value) / 100; /* (в обьекте Audio шкала от 0 до 1, поэтому делим на 100) */
        setVolume(Number(e.target.value));
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => { /* (для перемотки) */
        audio.currentTime = Number(e.target.value); /* (меняем текущее время в обьекте Audio согласно бегунку) */
        setCurrentTime(Number(e.target.value));
    }

    if (!active) {
        return null;
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {!pause
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div style={{fontSize: 12, color: "gray"}}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;