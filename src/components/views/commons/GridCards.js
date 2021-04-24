import {Grid, Image} from 'semantic-ui-react'
import React, {useEffect} from "react";
function GridCards(props){


    return(
        <Grid.Row>
            {props.images &&props.images.map((imageLink)=>(
                <Image src={imageLink}/>
            ))}
        </Grid.Row>
    )
}

export default GridCards