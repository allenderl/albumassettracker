// src/pages/album-list-page

import React, { Component} from 'react';
import { connect } from 'react-redux';
import AlbumList from '../components/album-list';
import { fetchAlbums } from '../actions/album-actions';

class AlbumListPage extends Component {

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        return (
            <div>
                <h1>List of Albums</h1>
                <AlbumList albums={this.props.albums}/>
            </div>
        )
    }
}

// Make albums  array available in  props
function mapStateToProps(state) {
    return {
        albums : state.albumStore.albums
    }
}

export default connect(mapStateToProps, {fetchAlbums})(AlbumListPage);