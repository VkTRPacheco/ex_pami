import { Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

function Botao(){
    return(
        <TouchableOpacity 
        style={styles.button}
       /* onPress={() => AddNumber()}*/
      >
        <Text style={styles.textButton}>000</Text>
      </TouchableOpacity>
    )
}

export default Botao;