import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    height: 30vh;

    align-items: center; 

    background-color: blue;
    

    @media (max-width: 768px) {
        flex-direction: column;

    } 
`;

export const Image = styled.img`
    width: 25vw;
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;

    width: 45vw;

    align-items: center;
    justify-content: center;

    margin-left: 50%;

    cursor: pointer;

    @media (max-width: 768px) {
        width: 100vw;
        height: 30vh;
        padding: 10px;
        margin-left: 25%;

    }
`;

export const Title = styled.h1`
    display: flex;

    margin-bottom: 2%;

    font-size: 2rem;
    line-height: 3rem;
    color: ${props => props.theme.colors.title};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TextAbout = styled.p`
    display: flex;

    font-size: 1rem;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
