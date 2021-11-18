import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./styles";

function Survey({ navigation }) {
  const [anonimo, setAnonimo] = React.useState("");

  const getData = async () => {
    try {
      const importancia = await AsyncStorage.getItem('importancia');
      if (importancia !== null) {
        // We have data!!
        console.log(importancia);
      }
      const satisfacao = await AsyncStorage.getItem('satisfacao');
      if (satisfacao !== null) {
        // We have data!!
        console.log(satisfacao);
      }
    } catch (error) {
      // Error retrieving data
      console.log("Valores não encontrados!");
    }
  };
  getData()
  
  return (
    <View style={Styles.container}>
      <View style={Styles.ps_bar}>
        <Text style={Styles.titleBar}>PS</Text>
      </View>

      <View style={Styles.survey}>
        <Text style={Styles.question}>
          Pesquisa de satisfação
        </Text>
        <Text style={Styles.questionLabel}>Deseja enviar o formulario anonimamente? </Text>
        <RadioButton.Group
          onValueChange={(newValue) => setAnonimo(newValue)}
          value={anonimo}
        >
          {/* - Sim Radio - */}
          <RadioButton.Item
            value="Sim"
            label="Sim"
            color="#C22A1F"
            labelStyle={Styles.text}
          />

          {/* - Não Radio - */}
          <RadioButton.Item
            value="Não"
            label="Não"
            color="#C22A1F"
            labelStyle={Styles.text}
          />

        </RadioButton.Group>        
      </View>
        {anonimo === "" ? 
      <TouchableOpacity style={Styles.btnFinish_disabled}>
          <Text style={Styles.textBtn}>Enviar formulário</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={Styles.btnFinish} onPress={() => navigation.navigate("Thanks", {
        imp: {importancia},
        sats: {satisfacao},
        feed: {feedback}
        // se voltar pra tela e apagar o feedback, o feedback continua com o valor setado anteriormente
      })}>
          <Text style={Styles.textBtn}>Enviar formulário</Text>
      </TouchableOpacity>
      }
    </View>
  );
}

export default Survey;
