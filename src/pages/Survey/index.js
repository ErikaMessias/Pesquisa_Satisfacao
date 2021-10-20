import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Ellipse } from "react-native-svg";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./Styles";

function Survey(props) {
  const [checked, setChecked] = React.useState("first");
  const theme = {
    colors: {
      primary: "#6200ee",
      accent: "yellow",
    },
  };

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
        {/* - First Radio - */}
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        />
        <Text style={Styles.alta}>Alta</Text>

        {/* - Second Radio - */}
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
        <Text style={Styles.media}>Média</Text>

        {/* - Third Radio - */}
        <RadioButton
          value="third"
          theme={theme.colors.primary}
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
        />
        <Text style={Styles.baixa}>Baixa</Text>

        <Text style={Styles.nivelDeSatisfacao}>Nivel de Satisfação:</Text>
        <Text style={Styles.otimo}>Otimo</Text>
        <Text style={Styles.bom}>Bom</Text>
        <Text style={Styles.naoSeAplica}>Não se aplica</Text>
        <Text style={Styles.regular}>Regular</Text>
        <Text style={Styles.ruim}>Ruim</Text>
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
          ></Ellipse>
        </Svg>
        <Icon name="ios-arrow-forward" style={Styles.seta}></Icon>
      </TouchableOpacity>
    </View>
  );
}

export default Survey;
