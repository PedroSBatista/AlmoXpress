import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')}/>

        <Text style={styles.textLogin}>
        Tela de cadastro
        </Text>
        <TouchableOpacity onPress={()=>{router.back()}}>
          <Text>Voltar</Text>
        </TouchableOpacity>
        
    </View>
  );


}
