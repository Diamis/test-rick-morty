import styled from 'styled-components';

export const Container = styled.div(({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}));

export const ContainerBlock = styled.div(({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 900
}));

export const Item = styled.div(({
    margin: 10,
    width: 100,
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative'
}));

export const Remove = styled.div(({
    position: 'absolute',
    zIndex: 10,
    top: 5,
    right: 5,
    borderRadius: 15,
    overflow: 'hidden',
    width: 15,
    height: 15,
    backgroundColor: '#ccc',
    transition: 'background 0.3s',

    '::before,::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white',
        width: 1,
        height: '80%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    '::before': {
        transform: 'translate(-50%, -50%) rotate(45deg)'
    },
    '::after': {
        transform: 'translate(-50%, -50%) rotate(-45deg)'
    },
    ':hover': {
        backgroundColor: 'red'
    }
}));
