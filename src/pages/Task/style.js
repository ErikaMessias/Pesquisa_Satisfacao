import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F",
        paddingTop: 20,

    },

    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 5,
    },

    deleteTask: {
        justifyContent: "center",
        padding: 10,
    },

    DescriptionTask: {
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#BBB",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 5,
        color: "#000",
    },

    buttonNewTask: {
        position: "relative",
        marginTop: 600,
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        marginVertical: 370,
        backgroundColor: "#888",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    iconButton: {
        color: "#FF0",
        fontSize: 20,
        fontWeight: "bold",
    },

    iconButtonLogout: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
    },

    buttonLogout: {
        position: "absolute",
        marginTop: 600,
        width: 60,
        height: 60,
        bottom: 30,
        right: 20,
        backgroundColor: "#888",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles