import styled from 'styled-components';

export const Container = styled.div(({
    width: 100,
    height: 135,
    overflow: 'hidden',
    position: 'relative'
}));

export const Image = styled.img(({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "150%",
    maxHeight: "150%"
}));

export const Name = styled.span(({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    fontSize: 11,
    padding: '1px 0'
}));
