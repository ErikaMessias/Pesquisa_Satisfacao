import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import firebase from "../../config/firebaseconfig";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [checked, setChecked] = React.useState("first");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const LoginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Survey", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigation.navigate("Survey", { idUser: user.uid });
      }
    });
  }, []);

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
              onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
        </View>
      </View>
      {errorLogin === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}> Email ou senha inválidos</Text>
        </View>
      ) : (
        <View />
      )}

      {email === "" || password === "" ? (
        <TouchableOpacity
          // disabled={true}
          style={styles.buttonLogin}
          //onPress={() => navigation.navigate("Survey")}
        >
          <Text style={styles.textButtomLogin}>Acessar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("Survey")}
        >
          <Text style={styles.textButtomLogin}>Acessar</Text>
        </TouchableOpacity>
      )}
      <View style={{ height: 100 }} />
      
      {/* <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      /> */}
    </KeyboardAvoidingView>
  );
}
