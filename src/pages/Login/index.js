import React, { useState, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import { TouchableOpacity } from 'react-native'
import firebase from "../../config/firebaseconfig"
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const LoginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Survey", { idUser: user.uid })
        })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigation.navigate("Survey", { idUser: user.uid })
            }
        });
    }, []);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
            
            style={styles.container}
        >
        <View style={styles.quadrado}>
            <View style={styles.rotapm}>
                <Text style={styles.logtxt}>Login</Text>
            </View>
        </View>
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
            {errorLogin === true
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons

                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}> Email ou senha inválidos</Text>
                </View>
                :
                <View />
            }

            {email === "" || password === ""
                ?
                <TouchableOpacity
                    // disabled={true}
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Survey")}
                >
                    <Text style={styles.textButtomLogin}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Survey")}
                >
                    <Text style={styles.textButtomLogin}>Login</Text>
                </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Voce não tem cadastro?
                <Text
                    style={styles.linkSubscribers}
                    onPress={() => navigation.navigate("Cadastro")}
                >
                    Cadastre-se
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}