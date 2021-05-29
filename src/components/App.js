import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('MKBHD')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    const onVideoSelect = (video) => {
        console.log(`${video.snippet.channelTitle} : `, video)
        setSelectedVideo(video)
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>

                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={onVideoSelect}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App


/*
when [videos] state changes, setSelectedVideo to the first video
*/