import React from 'react';

import { Container, Image, Name } from './style'

interface Props {
    id?: number
    name?: string
    image: string
}

export const Avatar: React.FC<Props> = ({ name, image }) => {
    if(!image) return null;
    return (
        <Container>
            <Image src={image} alt={name || ''} />
            {name && <Name>{name}</Name>}
        </Container>
    )
};
