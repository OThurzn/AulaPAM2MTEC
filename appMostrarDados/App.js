import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [CPF, setCPF] = useState('');
  const [telefone, settelefone] = useState('');
  const [idade, setidade] = useState('');
  const [serie, setserie] = useState('');

  const [mostrarCPF, setMostraCPF] = useState('');
  const [mostrarTelefone, setMostraTelefone] = useState('');
  const [mostrarIdade, setMostraIdade] = useState('');
  const [mostrarSerie, setMostraSerie] = useState('');

  function exibir(){
    if (CPF=='' || telefone=='' || idade=='' || serie=='' || isNaN(CPF, telefone, idade, serie)){
      alert("Por favor prencha todos os campos corretamente");
    }
    else{
      setMostraCPF(CPF);
      setMostraTelefone(telefone);
      setMostraIdade(idade);
      setMostraSerie(serie);
      
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prencha os campos:</Text>
      <TextInput
      style={styles.inputs}
      placeholder='Digite seu CPF: '
      onChangeText={(CPF) =>setCPF(CPF)}>
      </TextInput>
      <TextInput
      style={styles.inputs}
      placeholder='Digite seu telefone: '
      onChangeText={(telefone) =>settelefone(telefone)}>
      </TextInput>
      <TextInput
      style={styles.inputs}
      placeholder='Digite sua idade: '
      onChangeText={(idade) =>setidade(idade)}>
      </TextInput>
      <TextInput
      style={styles.input}
      placeholder='Digite sua série: '
      onChangeText={(serie) =>setserie(serie)}>
      </TextInput>

      <Button 
      title="Exibir dados:"
      onPress={exibir}></Button>
      <Text style={styles.textoexibir}>CPF digitado: {mostrarCPF}</Text>
      <Text style={styles.textoexibir}>Telefone digitado: {mostrarTelefone}</Text>
      <Text style={styles.textoexibir}>Idade digitado: {mostrarIdade}</Text>
      <Text style={styles.textoexibir}>serie digitado: {mostrarSerie}</Text>
      
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
});
