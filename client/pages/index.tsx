import React from 'react'; 
import NavBar from '@/components/NavBar';
import { Button } from '@mui/material';

const index = () => {
    return (
        <>
          <NavBar />
            <div className='center'>
                <h1>Добро пожаловать</h1>
                <h3>Здесь собраны лучшие треки!</h3>
                <Button>Press!</Button>
            </div>

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