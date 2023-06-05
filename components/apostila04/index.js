import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';


function Apostila04() {

    const [inputNome, setNome] = useState('')
    const [inputSobre, setSobre] = useState ('')
    const [mensagem, setMensagem] = useState();

    function apresentaMensagem() {
        setMensagem(`${inputNome} ${inputSobre}`);
        setNome('');
        setSobre('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Exemplo 4</Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>
            <TextInput style={styles.txtEntrada}
            onChangeText={(e) => setNome(e)}
            value={inputNome}/>

            <Text style={styles.txtSaida}></Text>
            <TextInput style={styles.txtEntrada}
            onChangeText={(e) => setSobre(e)}
            value={inputSobre}/>

            <TouchableOpacity style={styles.button}
            onPress={() => apresentaMensagem()}
            >
                <Text style={styles.textButton}>Mostrar Nome e Sobrenome</Text>
            </TouchableOpacity>
        </View>        
    );
}

export default Apostila04;

