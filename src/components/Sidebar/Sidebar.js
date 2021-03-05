import React from 'react'
import {SidebarHeader, SidebarText, Section,
        SubtitleText, Meter, SmallText} from '../../pages/Home/HomeStyle'

// import {SidebarData} from './SidebarData'
import DropOne from './Drop'
import DropTwo from './DropTwo'

function Sidebar() {

    return (
        <div>
            <SidebarHeader>
                <SidebarText>"school" requirements</SidebarText>
            </SidebarHeader>
            <Section>
                <SubtitleText>University requirements</SubtitleText>

                <Meter id="disk_d" value="0.6">60%</Meter>
                <SmallText>41/120 Total Credit inputted in schedule</SmallText>
            </Section>
            <DropOne/>
            <DropTwo />
        </div>
    )
}

export default Sidebar
