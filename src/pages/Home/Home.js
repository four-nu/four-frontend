import React from 'react'
import Quater from '../../components/Quaters/Quaters'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import {Main, SideBar} from './HomeStyle'



function Home() {
    return (
        <div>
            <Navbar />
            <Main>
                <SideBar>
                    <Sidebar />
                </SideBar>
                <div style={{width: '100%', display: 'flex', overflowY: 'auto'}}>
                    <Quater />
                </div>
            </Main>
        </div>
    )
}

export default Home
