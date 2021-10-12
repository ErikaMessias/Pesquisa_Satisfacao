import { Platform, StyleSheet } from 'react-native'
import { ceil } from 'react-native-reanimated';

const styles = StyleSheet.create({
    buttonCad: {
        width: 283,
        height: 50,
        justifyContent: "center",
        margin: 270,
        alignItems: "center",
        backgroundColor: "rgba(212,48,48,1)",
        borderRadius: 5,
    },
    quadrado:{
    },
    rotapm:{
        width: 1280,
        height: 390,
        backgroundColor: "rgba(212,48,48,1)",
        transform: [
            {
                rotate: "-17.00deg",
            }
        ],
       marginTop: -250,
    marginLeft: 25,
    },
    logtxt:{
        fontFamily: "roboto-500",
        color: "#ffffff",
        fontSize: 47,
        zIndex: 1000,
        textAlign: "center",
        alignSelf: 'center',
    },
    forinha:{
        width: 283,
        height: 183,
        marginTop: 200
    },
    foranome: {
        width: 283,
        height: 77,
      
    },
    foracpf: {
        width: 283,
        marginTop: 27,
        height: 77,
      
    },
    foraemail: {
        width: 283,
        marginTop: 27,
        height: 77,
      
    },
    forasenha:{
        width: 283,
        marginTop: 27,
        height: 78,
    },
    foraconfsenha:{
        width: 283,
        marginTop: 27,
        height: 78,
    },

    input:{
        fontFamily: 'roboto-regular',
        color: "121212",
        height: 33,
        width: 268,
        marginTop: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    text: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 16,
        marginTop: -77,
        marginLeft: 1,
        paddingBottom: 10
    },
    bordinha: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius:7,
        width: 283,
        height: 50
    },
    textButtomLogin: {
        color: "#ffffff",
        fontSize: 21,
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    registration: {
        // marginTop: 20,
        color: "#4d5156"
    },
    linkSubscribers: {
        color: "#1877f2",
        fontSize: 16,
    },

    // ======================================================

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    rect: {
        width: 283,
        height: 50,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 7,
        marginTop: 322,
        marginLeft: 46
    },
    placeholder: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 33,
        width: 268,
        marginTop: 8,
        marginLeft: 7
    },
    rect1: {
        width: 283,
        height: 50,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 7,
        marginTop: 78,
        marginLeft: 46
    },
    placeholder2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 37,
        width: 268,
        marginTop: 6,
        marginLeft: 7
    },
    login: {
        top: 186,
        left: 41,
        position: "absolute",
        fontFamily: "roboto-500",
        color: "#121212",
        fontSize: 47,
        textAlign: "center"
    },
    image: {
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        position: "absolute"
    },
    loginStack: {
        width: 200,
        height: 243,
        marginTop: -469,
        marginLeft: 88
    },
    cpf: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 16,
        marginTop: 21,
        marginLeft: 47
    },
    senha: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 17,
        marginTop: 108,
        marginLeft: 46
    },
    entrar1: {
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 21,
        marginTop: 221,
        marginLeft: 591
    },
    button: {
        width: 283,
        height: 53,
        backgroundColor: "rgba(212,48,48,1)",
        borderRadius: 8,
        marginTop: -118,
        marginLeft: 46
    },
    entrar4: {
        fontFamily: "roboto-500",
        color: "rgba(255,255,255,1)",
        fontSize: 21,
        marginTop: 13,
        marginLeft: 116
    },
    barraLogin: {
        height: 1465,
        width: 1586,
    }
});

export default styles