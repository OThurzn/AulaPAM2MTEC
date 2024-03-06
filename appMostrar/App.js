import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [Email, setEmail] = useState('');
  const [mostraEmail, setMostraEmail] = useState('');
  function mostrar(){
    if (Email==""){
      alert("Por favor prencha todos os campos");
    }
    else{
      setMostraEmail(Email);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Digite seu E-mail:</Text>
      <TextInput
      style={styles.caixatexto}
      placeholder='Digite seu E-mail'
      onChangeText={(Email) =>setEmail(Email)}>
      </TextInput>
      <Button 
      title="Exibir E-mail"
      onPress={mostrar}></Button>

      <Text style={styles.textoexibir}>Email digitado: {mostraEmail}</Text>
    
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
  caixatexto: {
    width:165,
    borderWidth: 10,
    borderColor: '#2296f3',
    height: 45,
    padding: 10,
    fontSize: 20,
    marginBottom: 20
  },
  textoexibir: {
    textAlign: 'center',
    fontSize: 25,
    color: '#229'
},
});
