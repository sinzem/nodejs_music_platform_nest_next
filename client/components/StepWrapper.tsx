import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

interface StepWrapperProps {
    activeStep: number;
    children: any;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек'];

/* (компонент для отображения шагов загрузки на странице загрузки, используется как обложка для функционала create.tsx) */
const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => 
                    <Step
                        key={index}
                        completed={activeStep > index} /* (отметит выполненые шаги - если активный шаг больше индекса этого шага) */
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: "70px auto", height: 270}}>
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;