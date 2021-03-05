import React from 'react'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
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