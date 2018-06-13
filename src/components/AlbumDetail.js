import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    albumHeaderStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    albumArtStyle
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={albumHeaderStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image
          style={albumArtStyle}
          source={{ uri: image }}
        />
      </CardItem>
    </Card>
  );
};

const styles = {
  albumHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumArtStyle: {
    width: null,
    height: 300,
    flex: 1
  }
};

export default AlbumDetail;
