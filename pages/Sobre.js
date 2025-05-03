import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Audio } from 'expo-av'; 

export default function AboutScreen() {
  const sound = useRef(null);

  useEffect(() => {
    async function loadAndPlaySound() {
      try {
        await Audio.requestPermissionsAsync(); 
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
        });
  
        const { sound: loadedSound } = await Audio.Sound.createAsync(
          require('../assets/audio/musica.mp3')
        );
  
        sound.current = loadedSound;
        await sound.current.setVolumeAsync(1.0);
        await sound.current.playAsync();
        console.log('Som reproduzindo...');
      } catch (error) {
        console.log('[Erro ao carregar o áudio]:', error);
      }
    }
  
    loadAndPlaySound();
  
    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);
  

  return (
    <View style={styles.container}>
      <Header title="Sobre" showBackButton />
      <View style={styles.content}>
        <Text style={styles.text}>Maria Carolina Pegoraro - 1136827</Text>
        <Text style={styles.email}>Email: 1136827@atitus.edu.br</Text>

        <Text style={styles.text}>João Vinicius Lago - 1137093 </Text>
        <Text style={styles.email}>Email: 1137093@atitus.edu.br</Text>

        <Text style={styles.text}>Carlos Eduardo Tonhelski - 1136868</Text>
        <Text style={styles.email}>Email: 1136868@atitus.edu.br</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    flex: 1,
    backgroundColor: '#222',
  },
  content: {
    padding: 20,
  },
  email:{
    marginBottom: 30,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
});
