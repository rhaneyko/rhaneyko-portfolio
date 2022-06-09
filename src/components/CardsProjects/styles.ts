import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
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

    margin-bottom: 1rem;

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
        }
        .projectDescription{
            display: inline;
            
            margin-top: 10%;
            
        }
    }

    @media (max-width: 768px) {
        width:  30vw;
        height: 24vh;
    }
`;

export const Image = styled.img`
   width: 21vw;
   height: 18vh;

   @media (max-width: 768px) {
        width:  30vw;
        height: 15vh;
   }
`;

export const ProjectName = styled.p`
   position: absolute;
   z-index: 9999;

   margin-top: 9.3%;

   font-weight: bold;
   font-size: 2rem;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
   color: ${props => props.theme.colors.title};

    @media (max-width: 768px) {
    }
`;

export const ProjectDescription = styled.p`
   display: none;
   height: 10vh;

   z-index: 9999;

   margin: 8px;

   font-size: 1rem;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

   line-height: 1.4rem;
   
   color: ${props => props.theme.colors.text};

   @media (max-width: 768px) {
        display: none;
   }
`;

export const Buttons = styled.div`
    display: none;
    flex-direction: row;

    position: absolute;
    z-index: 9999;

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
        width: 12vw;
    }
`;

export const ButtonViewLiveText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    @media (max-width: 768px) {
        font-size: 0.8rem;
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
        width: 12vw;
        
    }

    
`;

export const ButtonGitRepoText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;






