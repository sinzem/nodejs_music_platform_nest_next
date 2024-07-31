import NavBar from "@/components/NavBar";
import { Container } from "@mui/material";
import React, {FC} from "react";

const MiniLayout: any = ({children}: any) => {
    return (
        <>
            <NavBar />
            <Container style={{margin: '90px auto'}}>
                {children}  
            </Container> 
        </>
    );
};

export default MiniLayout;