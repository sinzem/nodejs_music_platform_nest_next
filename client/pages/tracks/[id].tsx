import MiniLayout from '@/layouts/MiniLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const TrackPage = () => {

    const track: ITrack = {_id: "1", name: "Track 1", artist: "Mobi", text: "Some text", listens: 7, audio: "http://localhost:5000/audio/6e37eb8c-a27e-4722-bc9a-421005136668.mp3", picture: "http://localhost:5000/image/499b67c9-b2b2-423c-af21-a510ad12925a.jpg", comments: []};
    const router = useRouter();

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
                <img src={track.picture} width={200} height={200}/>
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
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
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