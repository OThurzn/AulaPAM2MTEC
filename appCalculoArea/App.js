import React,{useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [Base,setBase] = useState(0);
  const [Altura,setAltura] = useState(0);
  const [Area,setArea] = useState(0);

  function calcularArea() {
    if (Base>0 && Altura>0){
      setArea((parseFloat(Base) * parseFloat(Altura))/2);
    }
    else{
      setArea('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculo Área do triângulo</Text>

      <Text style={styles.texto}>Digite a base do triângulo:</Text>
      <TextInput
        placeholder='Digite aqui o valor da base'
        syle={styles.caixa}
        keyboardType={'numeric'}
        onChangeText={Base => setBase(Base)}
      ></TextInput>
      <Text style={styles.texto}>Digite a altura do triângulo:</Text>
      <TextInput
      placeholder='Digite aqui o valor da altura'
      syle={styles.caixa}
      keyboardType={'numeric'}
      onChangeText={Altura => setAltura(Altura)}
      ></TextInput>
      <Button
        style={styles.botao}
        title='Calcular Área'
        onPress={calcularArea}
        ></Button>
        <Text> {Area ? `Área do triângulo ${Area} ` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#fD31af',
    fontSize: 30,
    textAlign: 'center',
  },
  texto: {
    color: '#ababab',
    fontSize: 15,
    textAlign: 'center',
  },
  caixa: {
    borderWidth: 4,
    width: 120,
    height: 50,
    borderColor: '#AD332f',
    borderRadius: 10,
    fontSize: 18,
  },
  botao: {
    width: 120,
    height: 50,
    backgroundColor: '#342f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  });