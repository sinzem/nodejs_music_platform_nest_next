import NavBar from "@/components/NavBar";
import Player from "@/components/Player";
import { Container } from "@mui/material";
import Head from "next/head";
import React, {FC} from "react";

interface MainLayoutProps { /* (типизация для заголовка страницы) */
    title?: string;
    description?: string;
    keywords?: string;
    children: any;
}

const MiniLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}: any) => {
    return (
        <>
            <Head> {/* (подключаем заголовок страницы, задаем на каждой, title подключен со значением по умолчанию, значения(title или другие) прокидываются через пропсы на каждой странице) */}
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={"Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым" + description}/>
                <meta name="robots" content="index, follow"/> {/* (разрешения на индексацию страницы и ссылок(в д.с закрепленные, без передачи прпсами)) */}
                <meta name="keywords" content={keywords || "Музыка, треки, mp3, скачать, загрузить, бесплатно"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/> {/* (желательно указать разрешения ширины и увеличения) */}
            </Head>
            <NavBar />
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MiniLayout;