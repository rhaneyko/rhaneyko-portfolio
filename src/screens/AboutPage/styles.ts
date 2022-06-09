import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center; 

    height: 75vh;
   

    @media (max-width: 390px) {
        display: flex;
        flex-direction: column;

        height: 80vh;
    } 
`;

export const Image = styled.img`
    width: 25vw;

    @media (max-width: 390px) {
        width: 90%;
        margin-left: 60%;
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

    @media (max-width: 390px ) {
        width: 70vh;

        margin-top: 5%;
        margin-left: 60%;

    } 
`;

export const Title = styled.h1`
    display: flex;

    font-size: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 3rem;
    color: ${props => props.theme.colors.title};

    @media (max-width: 390px) {
        font-size: 1.8rem;
    }
`;

export const TextAbout = styled.p`
    display: flex;

    margin-top: 0.3rem;

    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    color: ${props => props.theme.colors.text};

    @media (max-width: 390px) {
        font-size: 1.4rem;
    }

`;
