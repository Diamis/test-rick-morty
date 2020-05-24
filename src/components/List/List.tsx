import React from 'react';

import { Container, ContainerBlock, Remove, Item } from './style'
import { AppContext } from '../../context'
import { Avatar } from '../Avatar'

interface Props {
    onRemove?: (id: number) => void
}

export const List: React.FC<Props> = ({ onRemove }) => {
    const { results, onCurrent } = React.useContext(AppContext);
    const handleOnClick = (id: number) => {
        if(onCurrent) onCurrent(id)
    };

    const handleOnRemove = (id: number) => {
        if(onRemove) onRemove(id)
    };

    return (
        <Container>
            <ContainerBlock>
                {results && results.map(item => {
                    return (
                        <Item key={item.id} onClick={()=>handleOnClick(item.id)}>
                            {onRemove && <Remove onClick={()=>handleOnRemove(item.id)} />}
                            <Avatar {...item} />
                        </Item>
                    )
                })}
            </ContainerBlock>
        </Container>
    )
};
