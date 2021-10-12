import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import { TouchableOpacity } from 'react-native'
import styles from "./style"
import firebase from "../../config/firebaseconfig"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function NewUser({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Task", { idUser: user.uid })
        })
            .catch((error) => {
                setErrorRegister(true)
                let errorCode = error.code;
                let errorMessage = error.message;

            });
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Conta</Text>
            <TextInput
                style={styles.input}
                placeholder="enter your email"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="enter a password"
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

           {errorRegister === true 
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons

                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}> Email ou senha invalido</Text>
                    
                </View>
                :
                <View />
            }

            {email === "" || password === ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>cadastro</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={register}
                >
                    <Text style={styles.textButtonRegister}>cadastro</Text>
                </TouchableOpacity>
            }

            <Text style={styles.login}>
                Bora fazer login?
                <Text
                    style={styles.linkLogin}
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </Text>
            </Text>
            <View style={{ height: 100 }} />


        </KeyboardAvoidingView>
    );
}