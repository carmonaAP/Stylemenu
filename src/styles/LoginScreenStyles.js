// Pagina de css do Login
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Body(página toda)
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#rgb(255, 255, 255)',
    },

    bubbleContainer: {
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      top: 30,
      left: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    //Caixa da Logo da Empresa
    bubble: {
      backgroundColor: 'trasparent', //cor do "logo empresa"   
      borderWidth: 1,                  
      borderColor: 'white', //linha do "logo empresa"            
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,                
      width: '90%',                      
      alignItems: 'center',
      elevation: 5,
      boxShadowColor: '#000',
      boxShadowOpacity: 0.1,
      boxShadowRadius: 5,
      boxShadowOffset: { width: 0, height: 4 },
    },

    //Texto da Caixa da Logo
    bubbleText: {
      color: '#000',                  
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },

    //Título da Página
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      color: '#3C2415',
      fontWeight: 'bold',
    },

    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },

    //Botão do Login
    loginButton: {
      backgroundColor: 'rgb(4, 0, 255)',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },

    //Texto do Botão do Login
    loginButtonText: {
      color: '#3C2415',
      fontSize: 16,
      fontWeight: 'bold',
    },

    link: {
      color: '#3C2415',
      textAlign: 'center',
      marginTop: 10,
    },
    
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: 10,
    },
    
});

export default styles;