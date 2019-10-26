import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    if (!song) {
        return <div>Select song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
};

const mapStateToProps = state => {
    return { song: state.selectSong };
};

export default connect(mapStateToProps)(SongDetails)