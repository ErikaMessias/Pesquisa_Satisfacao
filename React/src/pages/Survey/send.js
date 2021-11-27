import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import Styles from "./styles";

function Survey({ navigation }) {
  const [anonimo, setAnonimo] = React.useState("");

  const data = async (anon) => {
    try {
      await AsyncStorage.setItem("anon", JSON.stringify(anon));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.ps_bar}>
        <Text style={Styles.titleBar}>PS</Text>
      </View>

      <View style={Styles.survey}>
        <Text style={Styles.question}>Pesquisa de satisfação</Text>
        <Text style={Styles.questionLabel}>
          Deseja enviar o formulario anonimamente?{" "}
        </Text>
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
      {anonimo === "" ? (
        <TouchableOpacity style={Styles.btnFinish_disabled}>
          <Text style={Styles.textBtn}>Enviar formulário</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={Styles.btnFinish}
          onPress={() => (
            navigation.navigate("Thanks"), data(anonimo))}
        >
          <Text style={Styles.textBtn}>Enviar formulário</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Survey;
