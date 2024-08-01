import TrackList from '@/components/TrackList';
import MiniLayout from '@/layouts/MiniLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {

    const router = useRouter(); /* (подключаем роутер - понадобится для перехода на страницу загрузки) */
    const tracks: ITrack[] = [
        {_id: "1", name: "Track 1", artist: "Mobi", text: "Some text", listens: 7, audio: "http://localhost:5000/audio/1.mp3", picture: "http://localhost:5000/image/1.jpg", comments: []},
        {_id: "2", name: "Track 2", artist: "Minelli", text: "Ram-pam-pam", listens: 11, audio: "http://localhost:5000/audio/2.mp3", picture: "http://localhost:5000/image/2.jpg", comments: []},
        {_id: "3", name: "Track 3", artist: "SomeBody", text: "Some text", listens: 2, audio: "http://localhost:5000/audio/3.mp3", picture: "http://localhost:5000/image/3.jpg", comments: []},
    ];

    return (
        <MiniLayout>
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
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MiniLayout>
    );
};

export default Index;