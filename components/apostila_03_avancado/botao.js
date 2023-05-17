botao.js
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Botao({ sinal }) {
    return (
        <TouchableOpacity 
        style={[styles.button, styles.botaoSinal]}
        /*onPress={() => AddNumber ()}*/
        >
        <Text style={styles.textButton}>{sinal}</Text>
      </TouchableOpacity>

    );
}


export default Botao;