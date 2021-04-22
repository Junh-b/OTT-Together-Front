import React from 'react'
import {Grid, Image, Segment, Button, Icon, Header} from 'semantic-ui-react'
import {Link} from "react-router-dom";

function Introduction(){
    return(
        <Segment>
            <Grid columns={2} relaxed='very' divided={true}>
                <Grid.Column>

                    <p style={{fontSize:'20px'}}>
                        <Header as='h1'>프로젝트 개요</Header>
                        <br/>
                        ex) 와라라라라라이
                    </p>
                    <Button as={Link} to='/main'>
                        둘러보기
                    </Button>

                </Grid.Column>
                <Grid.Column>
                    {/*<Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'></Image>*/}
                    <Icon name='file image outline' size='huge'></Icon>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Introduction