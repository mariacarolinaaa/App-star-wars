import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CardPersonagem from '../components/CardPersonagem';
import { useNavigation } from '@react-navigation/native';

const personagens = [
  { nome: 'Luke Skywalker', imagem: require('../assets/imagens/luke.png'), id: 1 },
  { nome: 'Darth Vader', imagem: require('../assets/imagens/darth.png'), id: 4 },
  { nome: 'Hansolo', imagem: require('../assets/imagens/Hansolo.png'), id: 14 },
  { nome: 'Yoda', imagem: require('../assets/imagens/yoda.png'), id: 20 },
  { nome: 'Chewbacca', imagem: require('../assets/imagens/chewbacca.png'), id: 13 },
];

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Star Wars" showSobreButton />
      <ScrollView contentContainerStyle={styles.cards}>
        {personagens.map(personagem => (
          <CardPersonagem
            key={personagem.id}
            personagem={personagem}
            onPress={() => navigation.navigate('Personagem', { id: personagem.id })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  cards: {
    padding: 10,
  },
});