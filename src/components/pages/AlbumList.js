import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AlbumDetail from '../pages/AlbumDetail'
import axios from 'axios'

export default class AlbumList extends Component {
    state = {
        albums: []
    }
    componentDidMount() {
        console.log('mounted');
        axios.get('http://reduxblog.herokuapp.com/api/posts')
            .then(response => {
                this.setState({ albums: response.data })
            })
    }

    renderData() {
        return this.state.albums.map(album => <AlbumDetail key={album.id} album={album.title} />)
    }
    render() {
        return (
            <View>
                {this.renderData()}
            </View>
        )
    }
}

