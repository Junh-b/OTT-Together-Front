import {Icon, Button, Menu} from "semantic-ui-react";
import React from "react";
import {Link} from "react-router-dom";

function LoginButton(){
    return (
        <Menu.Item as={Link} to='/login'>
            <Icon name='sign-in'/>
            <Button active={false} >login</Button>
        </Menu.Item>
    )
}

export default LoginButton