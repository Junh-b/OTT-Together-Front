import LeftMenu from "./Sections/LeftMenu";
import SearchBar from "./Sections/SearchBar";
import {Menu} from 'semantic-ui-react'
import LoginButton from "./Sections/LoginButton";
import React from "react";

function NavBar(){
    return(
        <nav>
            <Menu>
                <LeftMenu/>
                <Menu.Menu position='right'>
                    <SearchBar/>
                    <LoginButton/>
                </Menu.Menu>
            </Menu>
        </nav>

    )
}
export default NavBar