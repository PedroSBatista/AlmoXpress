import { StyleSheet } from "react-native"

 export const styles = StyleSheet.create ({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#0C4DA1'
  },
  containerBox:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput: {
    backgroundColor: '#fff',
    width: 326,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 38,
    marginVertical: 19,
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 14

  },
  textLogin:{
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'proppins',
    marginStart: 49
  },
  button:{
    backgroundColor: '#0C4DA1',
    justifyContent: 'center',
    marginTop: 26,
    marginBottom: 57,
    width: 154,
    height: 40,
    borderRadius: 10

  },
  textButton:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 700,
    fontFamily: 'proppins',
  },
  contentsLogin:{
    justifyContent: 'flex-start'
  },
  textRegister:{
    flexDirection: 'row',
  },
  textRegisterTouchable:{
    color: '#0C4DA1'
  },
  box:{
    backgroundColor: 'white',
    shadowColor: "#37578B"
  }
})