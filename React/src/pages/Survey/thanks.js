import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import * as sendData from "../../config/getDados";
import Styles from "./styles";

function Survey() {
  // Enviando dados:
  sendData.default();

  return (
    <View style={Styles.container}>
      <StatusBar />
      <View style={Styles.ps_bar}>
        <Text style={Styles.titleBar}>PS</Text>
      </View>

      <View style={Styles.finish}>
        <Text style={Styles.emoji}>😄</Text>
        <Text style={Styles.finishLabel}>
          Obrigado por responder nosso formulário!
        </Text>
        <Text style={Styles.questionLabel}>
          O Senai agradece sua compreensão.
        </Text>
        <Image
          style={Styles.logo}
          source={require("../../../assets/images/logo_senai.png")}
        />
      </View>
    </View>
  );
}

export default Survey;
