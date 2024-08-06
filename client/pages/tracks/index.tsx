import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MiniLayout from '@/layouts/MiniLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/actions-creators/track';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {

    const router = useRouter(); /* (подключаем роутер - понадобится для перехода на страницу загрузки) */
    
    // const tracks: ITrack[] = [
    //     {_id: "1", name: "Track 1", artist: "Mobi", text: "Some text", listens: 7, audio: "http://localhost:5000/audio/6e37eb8c-a27e-4722-bc9a-421005136668.mp3", picture: "http://localhost:5000/image/499b67c9-b2b2-423c-af21-a510ad12925a.jpg", comments: []},
    //     {_id: "2", name: "Track 2", artist: "Minelli", text: "Ram-pam-pam", listens: 11, audio: "http://localhost:5000/audio/16de2468-1e75-4dff-ae0e-25793e6b17bd.mp3", picture: "http://localhost:5000/image/e8cc6271-4bd9-4d45-87a4-b0e46715156e.jpg", comments: []},
    //     {_id: "3", name: "Track 3", artist: "SomeBody", text: "Some text", listens: 2, audio: "http://localhost:5000/audio/e7e32651-4df0-4adb-a719-f469a1001025.mp3", picture: "http://localhost:5000/image/e9a92008-3690-4b69-b951-f084fb457578.jpg", comments: []},
    // ];  /* (для тестирования, далее заменяем на пришедший из запроса) */ 

    const {tracks, error} = useTypedSelector(state => state.track); /* (получаем из состояний треки или ошибку(результат запроса на сервер)) */
    const [query, setQuery] = useState<string>(''); /* (для строки поиска) */
    const [timer, setTimer] = useState(null); /* (для установки таймаута при отправке search-запроса(чттобы не было рендера при введнии каждого символа)) */
    const dispatch = useDispatch() as NextThunkDispatch;

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500) /* (откладываем запрос на пол-секунды, чтобы не отправлять при нажатии каждой клавиши) */
        )
    }

    if (error) { /* (если есть ошибка - выводим сообщение) */
        return <MiniLayout>
            <h1>{error}</h1>
        </MiniLayout>
    }

    return (
        <MiniLayout title={"Список треков | музыкальная площадка"}>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TextField
                        // fullwidth
                        value={query}
                        onChange={search}    
                    />
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MiniLayout>
    );
};

export default Index;

/* (встроенная функция для запросов с next, при работе с redux запускаем через wrapper) */
export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res, ...ets}: any) : Promise<any>  => {
    const dispatch = store.dispatch as NextThunkDispatch; /* (получаем и типизируем dispatch(типизация оформлена в redusers/index.ts)) */
    await dispatch(await fetchTracks()); /* (делаем запрос через dispatch) */
})