import React, { useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

import Botao from './botao';

import styles from './styles';

export default function apostila03() {

  const [contador, setContador] = useState(0);

    function AddNumber(){
      setContador(contador+1);
        }

    function SubNumber(){
     setContador(contador-1);
        }

    function ZeroNumber(){
     setContador(contador=0);
    }    

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

      <Text style={styles.textCounter}>{contador}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => AddNumber()}
      >
        <Text style={styles.textButton}>Somar +1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => SubNumber()}
      >
        <Text style={styles.textButton}>Subtrair -1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => ZeroNumber()}
      >
        <Text style={styles.textButton}>Zerar</Text>
      </TouchableOpacity>

    </View>
  );
}

