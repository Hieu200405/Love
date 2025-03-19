import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const App = () => {
  const [confessed, setConfessed] = useState(false);
  const [noPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const moveNoButton = () => {
    Animated.spring(noPosition, {
      toValue: { x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 },
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {!confessed ? (
        <>
          <Text style={styles.question}>Em có thích Anh không? 🥰</Text>
          <TouchableOpacity style={styles.button} onPress={() => setConfessed(true)}>
            <Text style={styles.buttonText}>Có ❤️</Text>
          </TouchableOpacity>
          <Animated.View style={[styles.button, { transform: noPosition.getTranslateTransform() }]}>
            <TouchableOpacity onPress={moveNoButton}>
              <Text style={styles.buttonText}>Không 😜</Text>
            </TouchableOpacity>
          </Animated.View>
        </>
      ) : (
        <Text style={styles.loveMessage}>Yêu quá đi mất! 💖</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
  },
  question: {
    fontSize: 24,
    color: '#ff1493',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff69b4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loveMessage: {
    fontSize: 30,
    color: '#e91e63',
    fontWeight: 'bold',
  },
});

export default App;
