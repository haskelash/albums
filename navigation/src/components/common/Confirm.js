import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => (
  <Modal
    transparent
    visible={visible}
    animationType="slide"
    onRequestClose={() => {}}
  >
    <View>
      <CardItem>
        <Text>{children}</Text>
      </CardItem>
      <CardItem>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardItem>
    </View>
  </Modal>
);

export { Confirm };
