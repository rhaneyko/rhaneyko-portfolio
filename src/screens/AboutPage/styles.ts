import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center; 

    height: 75vh;
   

    @media (max-width: 768px) {
        flex-direction: column;

        height: 45vh;
    } 
`;

export const Image = styled.img`
    width: 25vw;

    @media (max-width: 768px) {
        width: 50vw;

        margin-bottom: 10px;
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;

    width: 50vw;
    height: 30vh;

    margin-left: 5%;


    align-items: center;

    cursor: pointer;

    @media (max-width: 768px) {
        width: 100vw;
        height: 20vh;
        padding: 10px;

        margin-left: 0;
    }

`;

export const Title = styled.h1`
    display: flex;

    font-size: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 3rem;
    color: ${props => props.theme.colors.title};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    
`;

export const TextAbout = styled.p`
    display: flex;

    margin-top: 0.3rem;

    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

   

`;
