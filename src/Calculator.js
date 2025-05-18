import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import theme from './theme';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handlePress = (label) => {
    if (label === '=') {
      try {
        const result = eval(display);
        setDisplay(String(result));
      } catch {
        setDisplay('Erro');
      }
    } else if (label === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + label);
    }
  };

  const renderButton = (label) => (
    <Button
      key={label}
      mode="contained"
      style={theme.button}
      labelStyle={theme.buttonLabel}
      onPress={() => handlePress(label)}
    >
      {label}
    </Button>
  );

  return (
    <View style={theme.calculator}>
      <View style={theme.display}>
        <Text style={theme.displayText} numberOfLines={1} adjustsFontSizeToFit>
          {display || '0'}
        </Text>
      </View>

      <View style={theme.row}>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('/')}
      </View>

      <View style={theme.row}>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('*')}
      </View>

      <View style={theme.row}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('-')}
      </View>

      <View style={theme.row}>
        {renderButton('C')}
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('+')}
      </View>

      <View style={theme.row}>
        {renderButton('=')}
      </View>
    </View>
  );
}
