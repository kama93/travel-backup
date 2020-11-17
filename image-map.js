import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageMapper from 'react-native-image-mapper';

const imageSource = require('./image/map.png');
const MAPPING = [
    {
        id: '0',
        name: 'Map',
        shape: 'circle',
        x1: 100,
        y1: 510,
        radius: 170,
        prefill: 'rgba(255, 255, 255, 0.25)',
    },
    {
        id: '1',
        name: 'Hotel',
        shape: 'rectangle',
        width: 200,
        height: 100,
        x1: 150,
        y1: 0,
        prefill: 'rgba(255, 255, 255, 0.25)',
    },
    {
        id: '2',
        name: 'Attractions',
        shape: 'circle',
        x1: 50,
        y1: 230,
        radius: 150,
        prefill: 'rgba(255, 255, 255, 0.25)',
    },
]


class ImageMap extends Component {
    render() {
        return (
            <ImageMapper
                imgHeight={800}
                imgWidth={460}
                imgSource={imageSource}
                imgMap={MAPPING}
                onPress={(item) => this.props.navigation.navigate(item.name)}
                containerStyle={styles.myCustomStyle}
                selectedAreaId="my_area_id"
                multiselect
            />);
    }
};

const styles = StyleSheet.create({

});

export default ImageMap
