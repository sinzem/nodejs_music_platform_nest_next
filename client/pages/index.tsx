import React from 'react'; 
import NavBar from '@/components/NavBar';
import { Button } from '@mui/material';
import MiniLayout from '@/layouts/MiniLayout';

const index = () => {
    return (
        <>
            <MiniLayout title={"Музыкальная площадка"}>
              <div className='center'>
                  <h1>Добро пожаловать</h1>
                  <h3>Здесь собраны лучшие треки!</h3>
                  <Button>Press!</Button>
              </div>
            </MiniLayout>
            

            <style jsx>
              {`
                .center {
                  margin-top: 150px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }
              `}
            </style>
        </>
    );
};

export default index;