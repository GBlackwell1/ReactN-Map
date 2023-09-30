import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_title: {
      fontSize: 23,
      margin: 3,
    },
    input_container: {
      margin: 10,
      backgroundColor: 'lightgray',
      width: '70%',
      borderRadius: 10,
      borderStyle: 'solid',
    },
    text_input: {
      fontSize: 20,
      textAlign: 'center',
      color: "gray",
      margin: 5
    },
    parent_container: {
      flexDirection: 'row',
      width: '78%',
      alignItems: 'center'
    },
    button: {
      color: '#2196F3',
      fontSize: 20,
      textAlign: 'center',
      margin: 5
    },
    map: {
      height: '100%',
      width: '100%'
    }
});

export default styles;