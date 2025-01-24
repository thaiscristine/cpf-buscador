import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { apiInstance } from '../../services/api';
import { CardsBox } from '@/components/CardBox';
import {validarCPF} from '../../utils/validadorCpf'

export default function TabOneScreen() {
  
  const [cards, setCards] = useState<object[]>([]);
  const [cpf, setCpf] = useState<string>();
  async function fetchCards() {
    try {
      const { data } = await apiInstance.get<any>(`/${cpf}/cards`);
      setCards(data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }

  const handleProcessar = (cpf) => {
    console.log()
    if (cpf) {
      validarCPF(cpf) ? fetchCards() : false
    }
  };

  const renderCard = ({ item }: { item: string }) => (
    <CardsBox
      tipo={item.tipo}
      nome={item.nome}
      numero={item.numero}
      codigo_seguranca={item.codigo_seguranca}
      limite={item.limite}
      validade={item.validade}
    >
      <Text>{JSON.stringify(item)}</Text>
    </CardsBox>
  );

  const renderEmptyList = () => (
    <Text style={styles.emptyListText}>No cards found</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Cartões</Text>
      <View style={styles.containerInput} >
        <TextInput style={styles.input}/>
      </View>
      <TouchableOpacity style={styles.buttonProcessar} onPress={handleProcessar} value={cpf} onChangeText={setCpf}>
        <Text>Processar</Text>
      </TouchableOpacity>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.toString()}
        renderItem={({item})=>(<View></View>)}
        ListEmptyComponent={renderEmptyList}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  containerInput: {
    width: '100%',
    paddingVertical: 10
  },
  input: {
    height: 40,
    padding: 5,
    backgroundColor: '#eaeaea',
    borderColor: '#ffd04f'
  },
  emptyListText: {},
  buttonProcessar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd04f',
    height: 40, 
    width: '100%',
    color: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
