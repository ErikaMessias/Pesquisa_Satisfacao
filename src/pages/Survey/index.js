import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";
import CupertinoRadio from "../../../components/cupertinoRadio";
import Styles from "./Styles";

function Survey(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.ps_bar}>
        <Text style={Styles.title}>PS</Text>
      </View>

      <View style={Styles.survey}>
        <Text style={Styles.question}>
          1. Limpeza e conservação da sala de aula e da oficina
        </Text>

        <Text style={Styles.nivelDeImportancia}>Nivel de Importancia:</Text>
        <View style={Styles.cupertinoRadioStackRow}>
          <View style={Styles.cupertinoRadioStack}>
            <CupertinoRadio style={Styles.cupertinoRadio}></CupertinoRadio>
            <CupertinoRadio style={Styles.cupertinoRadio2}></CupertinoRadio>
          </View>
          <View style={Styles.altaColumn}>
            <Text style={Styles.alta}>Alta</Text>
            <Text style={Styles.media}>Média</Text>
          </View>
        </View>
        <View style={Styles.cupertinoRadio3Row}>
          <CupertinoRadio style={Styles.cupertinoRadio3}></CupertinoRadio>
          <Text style={Styles.baixa}>Baixa</Text>
        </View>
        <Text style={Styles.nivelDeSatisfacao}>Nivel de Satisfação:</Text>
        <View style={Styles.cupertinoRadio4StackRow}>
          <View style={Styles.cupertinoRadio4Stack}>
            <CupertinoRadio style={Styles.cupertinoRadio4}></CupertinoRadio>
            <CupertinoRadio style={Styles.cupertinoRadio5}></CupertinoRadio>
          </View>
          <Text style={Styles.otimo}>Otimo</Text>
        </View>
        <View style={Styles.cupertinoRadio6Row}>
          <CupertinoRadio style={Styles.cupertinoRadio6}></CupertinoRadio>
          <Text style={Styles.bom}>Bom</Text>
        </View>
        <View style={Styles.cupertinoRadio9Row}>
          <CupertinoRadio style={Styles.cupertinoRadio9}></CupertinoRadio>
          <Text style={Styles.naoSeAplica}>Não se aplica</Text>
        </View>
        <View style={Styles.cupertinoRadio7Row}>
          <CupertinoRadio style={Styles.cupertinoRadio7}></CupertinoRadio>
          <Text style={Styles.regular}>Regular</Text>
        </View>
        <View style={Styles.cupertinoRadio8Row}>
          <CupertinoRadio style={Styles.cupertinoRadio8}></CupertinoRadio>
          <Text style={Styles.ruim}>Ruim</Text>
        </View>
      </View>

      <TouchableOpacity style={Styles.avancar}>
        <Svg viewBox="0 0 78.44 74.26">
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            fill="rgba(212,48,48,1)"
            cx={37}
            cy={37}
            rx={37}
            ry={37}
          >
          </Ellipse>
        </Svg>
            <Icon name="ios-arrow-forward" style={Styles.seta}></Icon>
      </TouchableOpacity>
    </View>
  );
}

export default Survey;
