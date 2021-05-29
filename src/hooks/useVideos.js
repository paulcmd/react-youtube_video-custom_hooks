import { useState, useEffect } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]) //output

    useEffect(() => {
        search(defaultSearchTerm) //input
    }, [defaultSearchTerm])

    const search = async (searchTerm) => {
        //output

        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })

        setVideos(response.data.items)

        console.log(response.data.items)
    }

    return [videos, search]
}

export default useVideos

/*
Refactor: Moved videos state, useEffect and onSearchTermSubmit from App.js.
These are the required inputs and outputs that can be used to create a generic component
that can be used by other components eg analytics

we are using the hook convention in our return statement ie, list of videos and a function
that can be used to change that list of videos(more or less). you can also return videos and
search as an object (js convention)
*/
