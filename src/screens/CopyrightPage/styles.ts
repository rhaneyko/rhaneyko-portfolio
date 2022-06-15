import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 10vh;

    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.title};
`;

export const Title = styled.text`
    font-size: 1.4rem;
    color: ${props => props.theme.colors.background};
`;

export const CopyrightText = styled.text`
    font-size: 1rem;
`;
