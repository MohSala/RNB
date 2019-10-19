import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AlbumDetail from '../pages/AlbumDetail'
import axios from 'axios'
import Header from '../layouts/Header'
import Spinner from '../layouts/Spinner'

export default class AlbumList extends Component {
    state = {
        albums: [],
        loading: false
    }
    componentDidMount() {
        console.log('mounted');
        this.setState({ loading: true })
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({
                    albums: response.data, loading
                        : false
                })
                console.log(response.data);
            })
    }

    renderData() {
        if (this.state.loading) {
            return <Spinner />
        }
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
    }
    render() {
        return (
            <View>
                <Header />
                {this.renderData()}
            </View>
        )
    }
}



