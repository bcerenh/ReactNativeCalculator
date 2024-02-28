import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(display);
        setResult(`Result: ${calculatedResult}`);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C'
    ];

    return buttons.map((buttonValue) => (
      <TouchableOpacity
        key={buttonValue}
        style={buttonValue === 'C' ? styles.clearButton : styles.button}
        onPress={() => handleButtonPress(buttonValue)}
      >
        <Text style={styles.buttonText}>{buttonValue}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  displayContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  displayText: {
    fontSize: 24,
  },
  resultContainer: {
    padding: 10,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 36,
    color: 'green',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  clearButton: {
    width: '100%', // Yalnızca 'C' butonu için genişlik
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ff9999', // Özel arka plan rengi
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CalculatorApp;
