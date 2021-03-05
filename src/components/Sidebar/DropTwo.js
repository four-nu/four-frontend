import React, {useState} from 'react'
import {Section, Text,
    SectionWrapper, DropDownLink, SubNavWrapper, 
    SubNavText, Span} from '../../pages/Home/HomeStyle'

import * as RiIcons from 'react-icons/ri'

function DropTwo() {

    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subNav)

    const SidebarData = [
        {
            title: "Major Courses",
            iconClosed: <RiIcons.RiArrowDownSFill/>,
            iconOpened: <RiIcons.RiArrowUpSFill/>,
            subNav: [
                {
                    title: 'Required courses',
                    courses: '3 courses'
                },
                {
                    title: 'Breadth courses',
                    courses: '5 courses'
                },
                {
                    title: 'Technical courses',
                    courses: '6 courses'
                },
                {
                    title: 'Project courses',
                    courses: '2 courses'
                }
            ]
        }
    ]

    return (
        <div>
            { SidebarData && SidebarData.map((item, index) => (
                <Section key={index}>
                    <SectionWrapper onClick={item.subNav && showSubNav}>
                        <Text>{item.title}</Text>
                        <div style={{fontSize: '1.3rem', marginTop: '.4rem'}}>
                            {item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                        </div>
                    </SectionWrapper>
                    {subNav && item.subNav.map((nav, index) => (
                        <DropDownLink nav={nav} key={index}>
                            <SubNavWrapper>
                                <SubNavText>{nav.title}</SubNavText>
                                <Span>{nav.courses}</Span>
                            </SubNavWrapper>
                        </DropDownLink>
                    ))}
                </Section>
            ))}
        </div>
    )
}

export default DropTwo
