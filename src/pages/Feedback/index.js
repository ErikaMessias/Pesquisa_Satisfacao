import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import { TouchableOpacity } from 'react-native'
import styles from "./style"

export default function NewUser({ navigation }) {


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
            style={styles.container}
        >
        </KeyboardAvoidingView>
    );
}