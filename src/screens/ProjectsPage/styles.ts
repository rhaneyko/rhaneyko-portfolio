import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 70vh;

    align-items: center;
    justify-content: center;

    padding: 5%;

    background-color: ${props => props.theme.colors.background};
`;

export const Title = styled.h1`
    margin-top: -8%;
    margin-bottom: 10%;

    font-size: 2rem;
    color: ${props => props.theme.colors.title};
`;
