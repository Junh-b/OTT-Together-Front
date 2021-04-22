import axios from 'axios';
import {
    TEST_API
} from "./types";
import {TEST_SERVER} from '../components/Config';

export function testAPI(){
    const request = axios.get(`${TEST_SERVER}`)
        .then(response=> response.data);
    return{
        type:TEST_API,
        payload: request
    }
}