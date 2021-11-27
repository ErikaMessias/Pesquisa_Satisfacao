import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../config/firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var [erroLogin, setErroLogin] = useState("");

  const signIn = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        navigation.navigate("Survey1");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErroLogin("Usuário ou senha inválidos. Verifique suas credenciais.");
      });
  };

  const data = async (mail) => {
    try {
      await AsyncStorage.setItem("mail", JSON.stringify(mail));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
      style={styles.container}
    >
      <View style={styles.rotapm}></View>
      <Text style={styles.logtxt}>Login</Text>
      <View style={styles.forinha}>
        <View style={styles.foracpf}>
          <Text style={styles.text}>E-mail</Text>
          <View style={styles.bordinha}>
            <TextInput
              style={styles.input}
              placeholder="Insira o seu email"
              type="text"
              onChangeText={setEmail}
              value={email}
            />
          </View>
        </View>
        <View style={styles.forasenha}>
          <Text style={styles.text}>Senha</Text>
          <View style={styles.bordinha}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Insira sua senha"
              type="text"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <Text style={{ color: "red" }}>{erroLogin}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => (signIn(), data(email))}
      >
        <Text style={styles.textButtomLogin}>Acessar</Text>
      </TouchableOpacity>

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
