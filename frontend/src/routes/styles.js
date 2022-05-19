import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    padding: 2rem;
    align-items: center;
    background-image: linear-gradient(#c20606, #0f0000);
    @media screen and (max-width: 390px){
       padding: 1rem; 
    }
`;

export const DashBoardStyle = styled.div`
    display: flex;
    width: auto;
`