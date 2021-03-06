import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 900px){
      min-width: 100%;
  }
  `

export const Table = styled.table`
  border: 2px solid #FF5959;
  background: rgba(71, 71, 71, 1);
  border-radius: 15px;
  padding: 0.5%;
  width: 90%;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  @media screen and (max-width: 900px){
      width: 100%;
      overflow: scroll;
  }
`

export const Td = styled.td`
    padding: 10px;
    background-color: rgba(71, 71, 71, 0.8);
    color: white;
    text-align: center;
    font-size: 1rem;
    font-weight: 100;
    @media screen and (max-width: 900px){
      padding: 5px;
      text-align: center;
  }
`

export const Th = styled.th`
    padding: 10px;
    background-color: rgba(71, 71, 71, 0.8);
    color: white;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 100;
    @media screen and (max-width: 900px){
      padding: 5px;
      text-align: center;
  }
`
export const Tbody = styled.tbody`
  background-color: rgba(173, 35, 42, 0.4);
 tr {
    &:hover {
      background-color: rgba(209, 27, 36, 1);
    }
  }
  td {
    position: relative;
    &:hover {
      background-color: #bbb504;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
      text-shadow: 0.10rem 0.10rem 0.15rem black;
      box-shadow: #7F7C21 -1px 1px, #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -3px 3px;
      transform: translate3d(1px, -1px, 0);
      transition-delay: 0s;
      transition-duration: 0.4s;
      transition-property: all;
      transition-timing-function: line;
      &:before {
        content: "";
        left: 0;
        right: 0;
        background-color: rgba(255,255,255,0.3);
      }
    }
  }
`
export const Thead = styled.thead`
  background: #000;
  text-transform: capitalize;
`
export const Tr = styled.tr`
  background: #000;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonSpace = styled.div`
  margin-top: 2rem;
  width: 50%;
`