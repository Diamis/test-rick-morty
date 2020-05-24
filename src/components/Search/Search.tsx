import React from 'react';
import { Input } from '@material-ui/core';

import { Container } from './style'

interface Props {
    onChange: (value: string) => void
}

export const Search: React.FC<Props> = ({ onChange }) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(onChange) onChange(value.trim());
    };

    return (
        <Container>
            <Input onChange={handleOnChange} placeholder="Поиск"/>
        </Container>
    )
};
