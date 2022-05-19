import styled from 'styled-components'

export const FormSpace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    padding: 2%;
    border: 2px solid #FFF;
    border-radius: 15px;
    width: 50%;
    margin-top: 6%;
    height: 40vh;

    @media screen and (max-width: 900px){
        width: 100%;
        height: 70vh;
        align-items: center;
    }
    @media screen and (max-width: 390px){
        width: 100%;
        height: 80vh;
        align-items: center;
    }
`
export const InputSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 900px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 30vh;
    }
`