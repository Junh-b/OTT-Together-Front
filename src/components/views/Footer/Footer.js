import {Icon, Menu} from "semantic-ui-react";
import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return (
        <div className="Footer">
            <div className='container'>
                <Menu>
                    <Menu.Item href='https://github.com/Junh-b' target='_blank'>
                        <Icon name='github square' size='big'/>
                    </Menu.Item>
                    <Menu.Item href='https://tech.junhabaek.net/' target='_blank'>
                        <Icon name='medium' size='big'/>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        jooha208@gmail.com
                    </Menu.Item>

                </Menu>
            </div>
        </div>
    )
}

export default Footer