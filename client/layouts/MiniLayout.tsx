import NavBar from "@/components/NavBar";
import Player from "@/components/Player";
import { Container } from "@mui/material";
import React, {FC} from "react";

const MiniLayout: any = ({children}: any) => {
    return (
        <>
            <NavBar />
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MiniLayout;