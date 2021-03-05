import React, {useState} from 'react'
import {Section, Text,
    SectionWrapper, DropDownLink, SubNavWrapper, 
    SubNavText, Span} from '../../pages/Home/HomeStyle'

import * as RiIcons from 'react-icons/ri'

function DropOne() {

    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subNav)

    const SidebarData = [
        {
            title: "Core Courses",
            iconClosed: <RiIcons.RiArrowDownSFill/>,
            iconOpened: <RiIcons.RiArrowUpSFill/>,
            subNav: [
                {
                    title: 'Mathematics',
                    courses: '4 units'
                },
                {
                    title: 'Engineering Analysis',
                    courses: '4 units'
                },
                {
                    title: 'Basic Science',
                    courses: '4 units'
                },
                {
                    title: 'Design & communications',
                    courses: '3 units'
                },
                {
                    title: 'Basic Engineering',
                    courses: '5 units'
                },
                {
                    title: 'Social sciences/ Humanities',
                    courses: '7 units'
                },
                {
                    title: 'Unrestricted Electives',
                    courses: '5 units'
                }
            ]
        },

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

export default DropOne
