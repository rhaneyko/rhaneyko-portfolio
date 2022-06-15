import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
`;

export const CardProject = styled.div`
    display: flex;
    flex-direction: column;

    width:  21vw;
    height: 22vh;

    align-items: center;

    position: static;
    
    line-height: 1rem;

    padding: 0;

    box-shadow: rgba(0, 0, 0, 2)  1px 1px 20px 1px;
    background-color: ${props => props.theme.colors.cardBackground};	

    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

        height: 30vh;

        .transition { transition: .3s cubic-bezier(.3, 0, 0, 1.3) }
        
        .buttonsHover{
            display: inline;
            
            margin-top: 3%;

            @media (max-width: 768px) {
                margin-top: 15%;
            }
        }
        .projectDescription{
          display: inline;
        }
    }

    @media (max-width: 768px) {
        width:  80vw;
        height: 22vh;
        margin-top: -10%;

        :hover{
          height: 28vh;
        }
    }
`;

export const Image = styled.img`
   width: 21vw;
   height: 18vh;

   @media (max-width: 768px) {
        width:  80vw;
        height: 18vh;
   }
`;

export const ProjectName = styled.p`
   position: absolute;
   z-index: 9999;

   margin-top: 9.3%;

   font-size: 2rem;
    
   color: ${props => props.theme.colors.title};
   
    @media (max-width: 768px) {
        font-size: 1.5rem;

        margin-top: 38%;
    }
`;

export const ProjectDescription = styled.p`
   display: none;
   height: 10vh;

   z-index: 9999;

   margin: 10% 3%;

   font-size: 1rem;
   line-height: 1.4rem;
   
   color: ${props => props.theme.colors.text};

   @media (max-width: 768px) {
        display: none;

        font-size: 0.9rem;

        margin-top: 10%;
   }
`;

export const Buttons = styled.div`
    display: none;
    flex-direction: row;

    position: absolute;
    z-index: 9999;

    @media(max-width: 768px) {
        display: inline;

        margin-top: 15%;
    }
`;


export const ButtonViewLive = styled.button`
    width: 7vw;
    height: 4vh; 
    
    border: 1px  solid ${props => props.theme.colors.borderButton};
    border-radius: 5rem;
    
    margin: 5px;
    
    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    @media (max-width: 768px) {
        width: 26vw;
    }
`;

export const ButtonViewLiveText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export const ButtonGitRepo = styled.button`
    width: 7vw;
    height: 4vh;
    
    border: 1px solid ${props => props.theme.colors.borderButton};
    border-radius: 5rem;

    margin: 5px;

    background-color: ${props => props.theme.colors.button};

    outline: 0;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    
    @media (max-width: 768px) {
        width: 26vw;
    }
`;

export const ButtonGitRepoText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;






