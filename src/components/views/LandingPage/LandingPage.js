import React, {useEffect} from 'react';
import axios from 'axios';
import Introduction from "./Sections/Introduction";
import Feature1 from "./Sections/Feature1";
import Feature2 from "./Sections/Feature2";
import APITestingArea from "./Sections/APITestingArea";

function LandingPage(){
    useEffect(()=>{
        axios.get('http://localhost:8080/')
            .then(response=>console.log(response.data))
    },[])
    return(
        <div>
            <APITestingArea/>
            <Introduction/>
            <Feature1/>
            <Feature2/>
        </div>
    )
}

export default LandingPage