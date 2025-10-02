import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <TextInput  placeholder="O que você vai pedir hoje?" style={styles.textInput}></TextInput>
      <View style={styles.containerBox}>
        <Text>Categoria</Text>
        <TouchableOpacity style={styles.box}>
          <Text>ELETROELETRÔNICA</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>ELÉTRICA (ALTA TENSÃO) </Text>
        </TouchableOpacity>
      </View>
    </View>
  );


}