import useInput from '@/hooks/useInput';
import MiniLayout from '@/layouts/MiniLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const TrackPage = ({serverTrack}: any) => {

    // const track: ITrack = {_id: "1", name: "Track 1", artist: "Mobi", text: "Some text", listens: 7, audio: "http://localhost:5000/audio/6e37eb8c-a27e-4722-bc9a-421005136668.mp3", picture: "http://localhost:5000/image/499b67c9-b2b2-423c-af21-a510ad12925a.jpg", comments: []}; /* (для проверки результата) */
    const [track, setTrack] = useState<ITrack>(serverTrack); /* (трек будем получать из пропсов(для получения прописана функция внизу)) */
    const username = useInput(''); /* (для добавления комментариев используем кастомный хук - вернет value и функцию изменения состояния, прикрепляем к инпуту) */
    const text = useInput('');
    const router = useRouter();

    const addComment = async () => { /* (функция для добавления комментария - отправит запрос с данными из инпутов на сервер, навешиваем на кнопку отправки) */
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id 
            });
            setTrack({...track, comments: [...track.comments, response.data]}); /* (добавляем данные из созданного комментария в состояния трека(для отрисовки на странице)) */
            
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <MiniLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push("/tracks")}
            >
                К списку
            </Button>
            <Grid container style={{margin: "20px 0"}}>
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
                <div style={{marginLeft: "30px"}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова песни</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                    {...username}
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    {...text}
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map((comment: any) => 
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MiniLayout>
    );
};

export default TrackPage;

/* (функция для получения пропсов(должна возвращать пропс) - из параметров запроса получаем id нужного трека и делаем запрос на сервер, полученный результат передаем в пропсы) */
export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params?.id);

    return {
        props: {
            serverTrack: response.data
        }
    }
}