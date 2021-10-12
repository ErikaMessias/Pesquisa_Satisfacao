import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import firebase from "../../config/firebaseconfig"
import styles from "./style"

export default function NewTask({ navigation, route },props) {
    const [description, setDescription] = useState(null)
    const database = firebase.firestore()

    function addTask() {
        database.collection(route.params.idUser).add({
            description: description,
            status: false
        })

        navigation.navigate("Task")
    }


    return (
        <View styles={styles.container}>
            <Text style={styles.label}> Descrição </Text>
            <TextInput
                style={styles.input}
                placeholder="Estudar JS"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { addTask()}}
            >
                <Text style={styles.iconButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}
