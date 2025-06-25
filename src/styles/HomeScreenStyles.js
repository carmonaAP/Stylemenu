// Pagina de css do Home
import { StyleSheet } from "react-native";

// Pagina de Login do Home
const styles = StyleSheet.create({
  //Body
    container: {
      flex: 1,
      backgroundColor: '#rgb(255, 255, 255)',
      paddingTop: 40, 
      paddingHorizontal: 20,
    },

    //Corpo
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    newsItem: {
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },

    description: {
      fontSize: 16,
      color: '#555',
    },

  });

  export default styles;
  