import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Main = styled.div`
    display: flex;
    height: 100vh;
`
export const SideBar = styled.section`
    min-width: 300px;
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
`
export const SidebarHeader = styled.div`
    padding: 1rem;
`
export const SidebarText = styled.h2`
    text-transform: uppercase;
    font-size: 1.2rem;
`
export const Section = styled.div`
    padding: .5rem 1rem;
`
export const SubtitleText = styled.h3`
    text-transform: uppercase;
    font-size: 1rem;
`

// .view-sections {
//     display: flex;
//     cursor: pointer;
// }

// .view-sections > i {
//     margin-right: 4px;
//     color: #7745FF;
// }

export const SubtitleTextTTwo = styled.h3`
    text-transform: uppercase;
    font-size: .8rem;
    margin-top: .055rem;
`

export const Meter = styled.meter`
    width: 250px;
    height: 30px;
    border-radius: 2px;
    color: #6247aa;
    margin-top: .5rem;
`

export const SmallText = styled.p`
    font-size: .7rem;
`
export const SectionTwo = styled.div`
    padding: 1rem;
`
export const Credit = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`
export const CreditText = styled.p`
    font-size: .8rem;
    color: #8b8c89;
`
export const CreditSubText = styled.p`
    font-size: .8rem;
    color: #53039e;
`
export const HorizontalLine = styled.hr`
    margin-top: .5rem;
`
export const Text = styled.p`
    margin-top: .4rem;
    margin-left: .8rem;
    font-weight: 600;
`
export const Wrapper = styled.section`
    max-width: 100%;
    height: 91vh;
    border: 1px solid #ddd;
    display: flex;
    overflow-x:scroll;
    padding: 2rem 1rem;
`
export const WrapperCard = styled.div`
    display: flex;
`

export const Item = styled.div`
    border: 2px solid #f4f1de;
    border-radius: 10px;
    min-width: 320px;
    min-height: auto;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

export const ItemHeader = styled.div`
    padding: 1rem;
`
export const ItemActions = styled.div`
`
export const ItemActionsWrapper = styled.div`
    margin-top: 1rem;
    border: 1px solid #f4f1de;
    padding: .5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const Vl = styled.div`
    border-left: 4px solid green;
    height: 400px;
    margin-top: 4px;
    margin-left: 12.5px;
`

export const AddButton = styled.button`
    outline: none;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #7745FF;
    color: #fff;
`

export const SubNavWrapper = styled.div`
    padding-left: 2rem;
    padding-top: .2rem;
    display: flex;
    justify-content: space-between;
`
export const SubNavText = styled.p`
    font-size: .8rem;
`

export const DropDownLink = styled.div`
    cursor: pointer;
`
export const Span = styled.span`
    margin-left: 2rem;
    font-size: .8rem;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardText = styled.p`
    padding-top: .2rem;
    font-size: .8rem;
`
export const CardLink = styled(Link)`
    text-decoration: none;
    font-size: 1.1rem;
    color: #000;
`

export const CardHeaderText = styled.p`
    color: #53039e;
    padding: .2rem 0;
    font-weight: 600;
`

export const Wrap = styled.div`
    padding: 1rem 0;
`
export const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-left: 5px solid #111;
    padding: .1rem .5rem;
    margin: 0;
    cursor: pointer;
    transition: all .5s;
    &:hover{
        background: #f0f0f0;
        border-left: 5px solid #53039e;
    }
`