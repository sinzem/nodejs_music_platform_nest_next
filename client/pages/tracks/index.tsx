import TrackList from '@/components/TrackList';
import MiniLayout from '@/layouts/MiniLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {

    const router = useRouter(); /* (подключаем роутер - понадобится для перехода на страницу загрузки) */
    const tracks: ITrack[] = [
        {_id: "1", name: "Track 1", artist: "Mobi", text: "Some text", listens: 7, audio: "http://localhost:5000/audio/6e37eb8c-a27e-4722-bc9a-421005136668.mp3", picture: "http://localhost:5000/image/499b67c9-b2b2-423c-af21-a510ad12925a.jpg", comments: []},
        {_id: "2", name: "Track 2", artist: "Minelli", text: "Ram-pam-pam", listens: 11, audio: "http://localhost:5000/audio/16de2468-1e75-4dff-ae0e-25793e6b17bd.mp3", picture: "http://localhost:5000/image/e8cc6271-4bd9-4d45-87a4-b0e46715156e.jpg", comments: []},
        {_id: "3", name: "Track 3", artist: "SomeBody", text: "Some text", listens: 2, audio: "http://localhost:5000/audio/e7e32651-4df0-4adb-a719-f469a1001025.mp3", picture: "http://localhost:5000/image/e9a92008-3690-4b69-b951-f084fb457578.jpg", comments: []},
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