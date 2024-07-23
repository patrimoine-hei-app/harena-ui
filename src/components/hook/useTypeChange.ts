import { useState, ChangeEvent } from 'react';

export const useTypeChange = () => {
    const [type, setType] = useState<string>('');

    const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value);
    };

    return {
        type,
        handleTypeChange,
    };
};
