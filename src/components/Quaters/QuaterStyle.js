import styled from 'styled-components'
// import { Link } from 'react-router-dom';

const Theme = {
    bg_blue: "#0077b6",
    bg_green: "#83e377",
    bg_yellow: "#ffd500",
    bg_lightblue: "#00bbf9"
  
  }

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 2rem;
    
`

export const Column = styled.div`
    width: 320px;
    border: 2px solid #f4f1de;
    border-radius: 10px;
    height: 500px;
    padding: .4rem .6rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    margin: 0 1rem;
`

export const ItemHeader = styled.div`
    padding: 1rem;
`

export const DroppableCol = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid #f4f1de;
    border-radius: 10px;
    padding: .5rem 1rem;
    margin: .8rem 0;
    overflow-y: auto;
    scroll-behavior: smooth;
`

export const CardQuater = styled.div`
    margin-top: 1rem;
    background: #FFFFFF;
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border-left: 8px solid ${({ green, yellow, lightblue }) => (green ? Theme.bg_green : yellow ? Theme.bg_yellow : lightblue ? Theme.bg_lightblue : Theme.bg_blue )};
    min-height: 95px;
    padding: .5rem;
    cursor: pointer;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardText = styled.p`
    padding-top: .2rem;
    font-size: .8rem;
`
export const CardLink = styled.p`
    text-decoration: none;
    /* font-size: 1.1rem; */
    color: #000;
    margin: 0;
`

export const CardHeaderText = styled.p`
    color: #53039e;
    font-weight: 600;
    font-size: 14px;
`

export const CardActions = styled.div`
    display: flex;
    /* margin-top: .3rem; */
` 

export const Modal = styled.div`
    opacity: 0;
    pointer-events: none;
    transition: all .5s ease-in
`