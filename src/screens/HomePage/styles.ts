import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 70vh;

    @media (max-width: 768px) {
        height: 60vh;
    }
`;

export const NavigationPages = styled.div`
    display: flex;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    width: 50vw;

    padding: 3.5rem;

    @media ( max-width: 768px ) {
        width: 60vw;
    }
`;

export const Name = styled.h1`
    display: flex;
    
    margin-left: 0.5rem;

    font-size: 2rem;

    color: ${props => props.theme.colors.title};
    @media ( max-width: 768px ){
        font-size: 1.5rem;
    }

`;

export const Gretting = styled.p`
    font-size: 1.3rem;
    line-height: 2rem;
    
    margin: 10px 10px 10px 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ButtonLnkd = styled.button`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    
    width: 120px;
    height: 40px; 

    margin: 20px 0px 10px 10px;
    
    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;

    @media ( max-width: 768px ){
         height: 40px;
    }
`;

export const ButtonCv = styled.button`
    width: 120px;
    height: 40px;
    
    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5px;
    
    margin-left: 140px;
    margin-top: -50px;


    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;
`;

export const ButtonTextLnkd = styled.p`
    font-size: 0.8rem;
    font-weight: bold;

    color: ${props => props.theme.colors.buttonText};
`;

export const ButtonTextCv = styled.p`
    font-size: 0.8rem;
    font-weight: bold;

    color: ${props => props.theme.colors.buttonText};
`;


