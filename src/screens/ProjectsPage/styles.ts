import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 50vh;

    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 125vw;
        height: 60vh;

        margin-top: 20px;
    }
    
  .rec.rec-arrow {
    margin: 50px;
    border-radius: 0;
    border: none;

    color: #0065FF;
    background-color: #FFFFFF;
    :hover {
        border-radius: 50%;
    }
    :disabled {
    visibility: hidden;
   }
    @media (max-width: 768px) {
        margin: 0px;

    }
}


`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme.colors.title};

`;

