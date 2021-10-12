import React, { useState, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { TouchableOpacity } from 'react-native'
import firebase from "../../config/firebaseconfig"
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default function Cadastro({ navigation }) {
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
                <Text style={styles.logtxt}>Cadastro</Text>
            </View>
        </View>
            <View style={styles.forinha}>
            <View style={styles.foranome}>
                    <Text style={styles.text}>Nome</Text>    
                    <View style={styles.bordinha}>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu nome"
                        type="text"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    </View>
                </View>
                <View style={styles.foracpf}>
                    <Text style={styles.text}>CPF</Text>    
                    <View style={styles.bordinha}>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o seu CPF"
                        type="text"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    </View>
                </View>
                <View style={styles.foraemail}>
                    <Text style={styles.text}>E-mail</Text>    
                    <View style={styles.bordinha}>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu e-mail"
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
                    <View style={styles.forasenha}>
                    <Text style={styles.text}>Confirme sua senha</Text>
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
                    style={styles.buttonCad}
                    onPress={() => Alert.alert("Cadastro realizado com sucesso")}
                >
                    <Text style={styles.textButtomLogin}>Cadastrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonCad}
                    onPress={() => navigation.navigate("Login")}
                    
                >
                    <Text style={styles.textButtomLogin}>Cadastrar</Text>
                </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Ja possui uma conta?
                <Text
                    style={styles.linkSubscribers}
                    onPress={() => navigation.navigate("Login")}
                >
                    Logar
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}