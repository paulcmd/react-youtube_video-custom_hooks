import axios from 'axios';


const KEY = 'AIzaSyBfB5VL8gxKXPdIPkpw9SiCoWroK95WRH4'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})

/*
q property will not be included here. Only when this axios instance is used and 
send a request over to the google api. ie the query string will be passed in when
making use of the instance
*/