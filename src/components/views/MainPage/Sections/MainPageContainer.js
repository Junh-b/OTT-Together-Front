import {Image, Grid, GridColumn, Header} from "semantic-ui-react";
import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import GridCards from "../../commons/GridCards";
import axios from "axios";

function MainPageContainer(props){
    const [images, setImages] = useState(['http://static.andang.net/test/posters/redpanda.jpg'])

    const fetchImages = (endpoint)=>{
        axios.get(`${endpoint}`)
            .then(response=>{
                if(response.data.success){
                    setImages(response.data.images)
                }
            })
    }

    useEffect(()=>{
        //TODO  fetchImages(props.requestImageLink)
    })

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column floated='left' width={4}>
                    <Header size='large'>{props.title}</Header>
                </Grid.Column>
                <Grid.Column floated='right' width={1}>
                    <Header size='medium' as={Link} to={props.moreLink}>더 보기</Header>
                </Grid.Column>
            </Grid.Row>
            <GridCards size={images.length} images={images}/>
        </Grid>

    )
}

export default MainPageContainer