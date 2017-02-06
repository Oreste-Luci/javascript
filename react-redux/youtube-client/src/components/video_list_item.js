import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {  // video = props.video

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={title} />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{title}</h4>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
