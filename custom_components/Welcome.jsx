import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import styles from "../styles/app.styles";

function Welcome({navigation}) {
    const [text, setText] = useState("Postal Code");

    return (
        <View style={styles.container}>
           <Text style={styles.text_title}>
                Please enter your Zip Code to continue!
           </Text>

            {/*Container for input and button*/}
           <View style={styles.parent_container}>

            <View style={styles.input_container}>
                    <TextInput style={styles.text_input}
                        placeholder='Postal Code'
                        onChangeText={data => setText(data)}
                    />
            </View>
            <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.button}
                        onPress={() =>  
                        navigation.navigate('Home', {zipcode: text})}>
                            Submit
                        </Text>
                    </View>
            </TouchableOpacity>

           </View>
           

        </View>
    );
}

export default Welcome;