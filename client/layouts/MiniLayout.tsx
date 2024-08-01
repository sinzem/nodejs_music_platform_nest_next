import NavBar from "@/components/NavBar";
<<<<<<< HEAD
import Player from "@/components/Player";
=======
>>>>>>> 9a89dbe0bed9ded2c4ec5b68144a383b1e670550
import { Container } from "@mui/material";
import React, {FC} from "react";

const MiniLayout: any = ({children}: any) => {
    return (
        <>
            <NavBar />
            <Container style={{margin: '90px auto'}}>
                {children}  
<<<<<<< HEAD
            </Container>
            <Player />
=======
            </Container> 
>>>>>>> 9a89dbe0bed9ded2c4ec5b68144a383b1e670550
        </>
    );
};

export default MiniLayout;