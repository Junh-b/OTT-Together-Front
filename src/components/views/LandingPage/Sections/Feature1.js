import {Grid, Image, Segment, Icon, Header} from 'semantic-ui-react'
import React from 'react'

function Feature1(){
    return(
        <Segment>
            <Grid columns={2} relaxed='very' divided={true}>
                <Grid.Column>
                    {/*<Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'></Image>*/}
                    <Icon name='file image outline' size='huge'></Icon>
                </Grid.Column>

                <Grid.Column>
                    <p style={{fontSize:'20px'}}>
                        <Header as='h1'>특징1</Header>
                        <br/>
                        ex) 와라라라라라이
                    </p>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Feature1