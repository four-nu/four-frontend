import React from 'react'
import {NavBar, List, ListItem, TextHeader} from './NavbarStyle'

function Navbar() {
    return (
        <div>
           <header>
            <NavBar>
                <div>
                    <TextHeader>Four.Nu</TextHeader>
                </div>
                <div>
                    <List>
                        <ListItem>About</ListItem>
                        <ListItem>Profile</ListItem>
                    </List>
                </div>
            </NavBar>
            </header>
        </div>
    )
}

export default Navbar
