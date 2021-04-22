import {Grid, Header, Icon, Segment} from "semantic-ui-react";
import React from "react";

function Feature2(){
    return(
        <Segment>
            <Grid columns={2} relaxed='very' divided={true}>
                <Grid.Column>
                    <p style={{fontSize:'20px'}}>
                        <Header as='h1'>특징2</Header>
                        <br/>
                        ex) 와라라라라라이
                    </p>
                </Grid.Column>
                <Grid.Column>
                    {/*<Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'></Image>*/}
                    <Icon name='file image outline' size='huge'></Icon>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Feature2