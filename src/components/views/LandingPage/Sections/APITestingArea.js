import {useDispatch} from "react-redux";
import {useState} from "react";
import React, {useEffect} from 'react';
import {testAPI} from "../../../../_actions/test_actions";
import {Header} from "semantic-ui-react";

function APITestingArea(){
    const dispatch =useDispatch();
    const [message, setMessage] =useState('bye');

    useEffect(()=>{
    dispatch(testAPI()).then(response=>{
        console.log(response.payload)
        setMessage(response.payload.message)
    })})

    return(
      <div>
          <Header as='h1'>`${message}`</Header>
      </div>
    );
}

export default APITestingArea