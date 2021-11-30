import firebase from "./firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getAndSend() {
  let dados = {};

  const imp1 = JSON.parse(await AsyncStorage.getItem("imp1"));
  const sat1 = JSON.parse(await AsyncStorage.getItem("sat1"));
  const fb1 = JSON.parse(await AsyncStorage.getItem("fb1"));
  console.log(imp1, sat1, fb1);

  const imp2 = JSON.parse(await AsyncStorage.getItem("imp2"));
  const sat2 = JSON.parse(await AsyncStorage.getItem("sat2"));
  const fb2 = JSON.parse(await AsyncStorage.getItem("fb2"));
  console.log(imp2, sat2, fb2);

  const imp3 = JSON.parse(await AsyncStorage.getItem("imp3"));
  const sat3 = JSON.parse(await AsyncStorage.getItem("sat3"));
  const fb3 = JSON.parse(await AsyncStorage.getItem("fb3"));
  console.log(imp3, sat3, fb3);

  const imp4 = JSON.parse(await AsyncStorage.getItem("imp4"));
  const sat4 = JSON.parse(await AsyncStorage.getItem("sat4"));
  const fb4 = JSON.parse(await AsyncStorage.getItem("fb4"));
  console.log(imp4, sat4, fb4);

  const imp5 = JSON.parse(await AsyncStorage.getItem("imp5"));
  const sat5 = JSON.parse(await AsyncStorage.getItem("sat5"));
  const fb5 = JSON.parse(await AsyncStorage.getItem("fb5"));
  console.log(imp5, sat5, fb5);

  const imp6 = JSON.parse(await AsyncStorage.getItem("imp6"));
  const sat6 = JSON.parse(await AsyncStorage.getItem("sat6"));
  const fb6 = JSON.parse(await AsyncStorage.getItem("fb6"));
  console.log(imp6, sat6, fb6);

  const imp7 = JSON.parse(await AsyncStorage.getItem("imp7"));
  const sat7 = JSON.parse(await AsyncStorage.getItem("sat7"));
  const fb7 = JSON.parse(await AsyncStorage.getItem("fb7"));
  console.log(imp7, sat7, fb7);

  const imp8 = JSON.parse(await AsyncStorage.getItem("imp8"));
  const sat8 = JSON.parse(await AsyncStorage.getItem("sat8"));
  const fb8 = JSON.parse(await AsyncStorage.getItem("fb8"));
  console.log(imp8, sat8, fb8);

  const imp9 = JSON.parse(await AsyncStorage.getItem("imp9"));
  const sat9 = JSON.parse(await AsyncStorage.getItem("sat9"));
  const fb9 = JSON.parse(await AsyncStorage.getItem("fb9"));
  console.log(imp9, sat9, fb9);

  const imp10 = JSON.parse(await AsyncStorage.getItem("imp10"));
  const sat10 = JSON.parse(await AsyncStorage.getItem("sat10"));
  const fb10 = JSON.parse(await AsyncStorage.getItem("fb10"));
  console.log(imp10, sat10, fb10);

  const imp11 = JSON.parse(await AsyncStorage.getItem("imp11"));
  const sat11 = JSON.parse(await AsyncStorage.getItem("sat11"));
  const fb11 = JSON.parse(await AsyncStorage.getItem("fb11"));
  console.log(imp11, sat11, fb11);

  const imp12 = JSON.parse(await AsyncStorage.getItem("imp12"));
  const sat12 = JSON.parse(await AsyncStorage.getItem("sat12"));
  const fb12 = JSON.parse(await AsyncStorage.getItem("fb12"));
  console.log(imp12, sat12, fb12);

  const imp13 = JSON.parse(await AsyncStorage.getItem("imp13"));
  const sat13 = JSON.parse(await AsyncStorage.getItem("sat13"));
  const fb13 = JSON.parse(await AsyncStorage.getItem("fb13"));
  console.log(imp13, sat13, fb13);

  for (let i = 1; i <= 13; ++i) {
    let text =
      "importância: " +
      JSON.parse(await AsyncStorage.getItem("imp" + i)) +
      "; satisfação: " +
      JSON.parse(await AsyncStorage.getItem("sat" + i)) +
      "; feedback: " +
      JSON.parse(await AsyncStorage.getItem("fb" + i));
    dados[i] = text;
  }

  const anon = JSON.parse(await AsyncStorage.getItem("anon"));
  if (anon == "Não") {
    dados[14] = "Autor: " + JSON.parse(await AsyncStorage.getItem("mail"));
  } else {
    dados[14] = "Autor: Anônimo";
  }
  console.log(dados[14]);

  firebase.database().ref("formularios").push(dados);
  // zerar os asyncstorage depois
}