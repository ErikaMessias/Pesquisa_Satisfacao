import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native";
import firebase from "../../config/firebaseconfig";
import styles from "./styles";  
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');

  const signIn = async() => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      var user = userCredential.user;
    
      navigation.navigate('Survey1')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode,errorMessage);
    });
  }


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
        </View>
      </View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => signIn()}
        >
          <Text style={styles.textButtomLogin}>Acessar</Text>
        </TouchableOpacity>
      
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
