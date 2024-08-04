import { ITrack } from '@/types/track';
import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '../styles/TrackItem.module.scss'; /* (стили подключаются как обьект, подключаются как свойства обьекта вместо имени класса) */
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';

interface TrackItemProps { /* (типизация входящих данных) */
    track: ITrack; 
    active?: boolean; /* (для указания активности - проигрывается ли трек(необязательный)) */ 
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {

    const router = useRouter(); /* (подключааем роутер, навешиваем на клик по карточке трека переход на его страницу) */
    const {playTrack, pauseTrack, setActiveTrack} = useActions(); /* (подключаем нужные экшнкриэйтеры) */

    const play = (e: any) => { /* (функция отработает при клике по кнопке play у трека) */
        e.stopPropagation();   /* (чтобы не переходить на страницу трека) */
        setActiveTrack(track); /* (устанавливаем трек активным) */
        playTrack(); /* (включаем проигрывание) */
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            {/* (навешиваем на всю карточку трека переход на страницу трека, на кнопки play и delete - stopPropagation, чтобы на них это не срабатывало, у них другой функционал) */}
            <IconButton onClick={play}>
                {active 
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={"http://localhost:5000" + track.picture}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: "gray"}}>{track.artist}</div>
            </Grid>
            {active && <div>02:44 / 02:50</div>}
            <IconButton style={{marginLeft: "auto"}} onClick={e => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;