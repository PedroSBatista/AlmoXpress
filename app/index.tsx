import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/logo.png')}/>

      <View style={styles.contentsLogin}>
        <Text style={styles.textLogin}>
          EMAIL :
        </Text>
        <TextInput style={styles.textInput}></TextInput>

        <Text style={styles.textLogin}>
          SENHA :
        </Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>ACESSAR</Text>
      </TouchableOpacity>

      <View style={styles.textRegister}>
        <Text>Não tem login?</Text>
       <TouchableOpacity onPress={()=>{router.push('/register')}}>
        <Text style={styles.textRegisterTouchable}> Cadastre-se</Text>
       </TouchableOpacity>
      </View>
    </View>
  );


}
