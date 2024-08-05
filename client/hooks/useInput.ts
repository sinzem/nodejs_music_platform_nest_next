import React, { useState } from 'react';

/* (хук для инпута - помещает введенное значение в состояние, вернет значение из состояния и функцию по изменению состояния) */
export const useInput = (initialValue: string) => {

    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value, 
        onChange
    };
};

export default useInput; /* (понадобится при создании трека pages/tracks/create.tsx) */