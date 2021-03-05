import styled from 'styled-components'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #53039e;
    width: 100%;
    height: 50px;
    color: #fff;
`

export const TextHeader = styled.h3`
    font-size: 1.5rem;
    margin-top: .5rem;
    margin-left: 1rem;
    cursor: pointer;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: .5rem;
    margin-right: 1rem;
    cursor: pointer;
`
export const ListItem = styled.li`
    margin: .4rem 0;
    margin-left: 1.5rem;
    font-size: 1rem;
`