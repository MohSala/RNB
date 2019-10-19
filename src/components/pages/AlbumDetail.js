import React from 'react'
import { View, Text, Image } from 'react-native'
import Card from '../layouts/Card'
import CardSection from '../layouts/CardSection'

const AlbumDetail = ({ album }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: album.thumbnail_image }} style={styles.thumbnailStyle} />
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.textHeaderStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    textHeaderStyle: {
        fontSize: 18
    }
}

export default AlbumDetail
