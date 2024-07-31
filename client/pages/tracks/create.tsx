import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import MiniLayout from '@/layouts/MiniLayout';
import { Grid, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Create = () => {

    const [activeStep, setActiveStep] = useState(0);

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MiniLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && 
                    <Grid container direction={"column"} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}} 
                            label={"Название трека"}
                        />
                        <TextField
                            style={{marginTop: 10}} 
                            label={"Имя исполнителя"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Слова к треку"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 && 
                    <FileUpload file={''} setFile={() => ({})}/>
                }
                {activeStep === 2 && 
                    <h1>Step 3</h1>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MiniLayout>
    );
};

export default Create;