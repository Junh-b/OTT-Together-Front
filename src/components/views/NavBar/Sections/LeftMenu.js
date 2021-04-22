import {Menu, Header, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React, {useState} from 'react';

function LeftMenu(){
    const [activeItem, setActiveItem] = useState('Home')

    return(
        <Menu>
            <div style={{paddingTop:'20px'}}>
                <Header size='huge'>OTT Together</Header>
            </div>
            <Menu.Item as={Link} to='/'>
                <Icon name='home'/>
                Home
            </Menu.Item>
            <Menu.Item as={Link} to='/contents?type=trending'>
                <Icon name='fire'/>
                Trending
            </Menu.Item>
            <Menu.Item as={Link} to='/contents?type=new'>
                <Icon name='newspaper outline'/>
                New
            </Menu.Item>
        </Menu>
    );
}
export default LeftMenu