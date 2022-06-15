import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 45vh;

    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 40vh;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme.colors.title};

    margin-bottom: 2%;
`;

