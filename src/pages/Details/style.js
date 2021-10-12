import  { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        paddingTop:20,

    },
    
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: "#F92E6A"
    },

    input: {
        width: "90%",
        height: 50,
        marginTop: 10,
        padding: 10,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#92E6AA"
    },

    Tasks:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end",
        marginTop:5,
    },

    deleteTask:{
        justifyContent:"center",
        padding:10,
    },

    DescriptionTask:{
        width:"85%",
        alignContent:"flex-start",
        backgroundColor:"#BBB",
        padding:12,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight:5,
        color:"#000",
    },

    buttonNewTask:{
        position:"relative",
        width:60,
        height:60,
        bottom:30,
        left:20,
        marginVertical:370,
        backgroundColor:"#888",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },

    iconButton:{
        color:"#FF0",
        fontSize:20,
        fontWeight:"bold",
    },
});

export default styles