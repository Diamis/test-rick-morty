import React from 'react';

import { Avatar } from '../Avatar'
import { AppContext } from '../../context'
import { Container, Block, BlockItem, Title, Name } from './style'

export const Party = () => {
    const { partyRick, partyMorty } = React.useContext(AppContext);
    return (
        <Container>
            <Title>Party</Title>
            <Block>
                <BlockItem>
                    {partyRick && <Avatar image={partyRick?.image} />}
                    <Name>Rick</Name>
                </BlockItem>
                <BlockItem>
                    {partyMorty && <Avatar image={partyMorty?.image} />}
                    <Name>Morty</Name>
                </BlockItem>
            </Block>
        </Container>
    )
};
