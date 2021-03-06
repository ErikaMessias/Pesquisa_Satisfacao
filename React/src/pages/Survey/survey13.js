import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import Styles from "./styles";

function Survey({ navigation }) {
  const [importancia, setImportancia] = React.useState("");
  const [satisfacao, setSatisfacao] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  const data = async (imp, sat, fb) => {
    try {
      await AsyncStorage.setItem("imp13", JSON.stringify(imp));
      await AsyncStorage.setItem("sat13", JSON.stringify(sat));
      await AsyncStorage.setItem("fb13", JSON.stringify(fb));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles.container}>
      <StatusBar backgroundColor="#fff"/>
      <View style={Styles.ps_bar}>
        <Text style={Styles.titleBar}>PS</Text>
      </View>

      <View style={Styles.survey}>
        <Text style={Styles.question}>13. Atendimento da biblioteca</Text>
        <Text>{}</Text>
        <Text style={Styles.questionLabel}>Nivel de Importancia:</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setImportancia(newValue)}
          value={importancia}
        >
          {/* - Alta Radio - */}
          <RadioButton.Item
            value="alta"
            label="Alta"
            color="#C22A1F"
            labelStyle={Styles.text}
          />

          {/* - Media Radio - */}
          <RadioButton.Item
            value="media"
            label="Média"
            color="#C22A1F"
            labelStyle={Styles.text}
          />

          {/* - Baixa Radio - */}
          <RadioButton.Item
            value="baixa"
            label="Baixa"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
        </RadioButton.Group>

        <RadioButton.Group
          onValueChange={(newValue) => setSatisfacao(newValue)}
          value={satisfacao}
        >
          <Text style={Styles.questionLabel}>Nivel de Satisfação:</Text>
          {/* - Ótimo Radio - */}
          <RadioButton.Item
            value="otimo"
            label="Ótimo"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
          {/* - Bom Radio - */}
          <RadioButton.Item
            value="bom"
            label="Bom"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
          {/* - Regular Radio - */}
          <RadioButton.Item
            value="regular"
            label="Regular"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
          {/* - Ruim Radio - */}
          <RadioButton.Item
            value="ruim"
            label="Ruim"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
          {/* - Não se aplica Radio - */}
          <RadioButton.Item
            value="nao-se-aplica"
            label="Não se aplica"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
        </RadioButton.Group>

        {satisfacao === "regular" || satisfacao === "ruim" ? (
          <View>
            <Text style={Styles.questionLabel}>
              Envie seu feedback para melhorarmos a qualidade deste serviço:
            </Text>
            <TextInput
              style={Styles.input}
              placeholder="Digite aqui"
              multiline={true}
              numberOfLines={4}
              defaultValue={feedback}
              onChangeText={(newValue) => setFeedback(newValue)}
            />
          </View>
        ) : null}
      </View>
      {satisfacao === "" ||
        importancia === "" ||
        ((satisfacao === "regular" || satisfacao === "ruim") &&
          feedback === "") ? (
        <TouchableOpacity style={Styles.btnFinish_disabled}>
          <Text style={Styles.textBtn}>Finalizar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={Styles.btnFinish} onPress={() => (navigation.navigate("Send"), data(importancia, satisfacao, feedback))}>
          <Text style={Styles.textBtn}>Finalizar</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}

export default Survey;
