import styled from 'styled-components';

export const Container = styled.div(({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const Block = styled.div(({
    display: 'flex',
    marginLeft: -5,
    marginRight: -5,
    justifyContent: 'center'
}));

export const BlockItem = styled.div(({
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#ccc',
    width: 100,
    height: 135
}));

export const Title = styled.div(({
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 10
}));

export const Name = styled.span(({
    position: 'absolute',
    textTransform: 'uppercase',
    left: 0,
    right: 0,
    bottom: 0,
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    padding: '2px 0'
}));
