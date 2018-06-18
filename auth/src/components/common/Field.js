import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Field = ({ label, value, placeholder, secureTextEntry, onChangeText }) => {
  const { fieldStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={fieldStyle}
      />
    </View>
  );
};

const styles = {
  fieldStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Field };
