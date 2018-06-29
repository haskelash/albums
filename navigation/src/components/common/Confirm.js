import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardItemStyle } = styles;
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardItem style={cardItemStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardItem>
        <CardItem>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardItem>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardItemStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
};

export { Confirm };
