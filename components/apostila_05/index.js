import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import style from '../apostila04/styles';
import styles from './styles';

export default function Index () {

    const   [n1, setN1] = useState(0);
    const   [n2, setN2] = useState(0);
    const   [total, setTotal] = useState(0);

    function Soma() {
        const conta = parseInt(n1) + parseInt(n2);
        setTotal(conta.toString());
    }

    function Subtracao() {
        const conta = parseInt(n1) - parseInt(n2);
        setTotal(conta.toString());
    }

    function Multiplicacao() {
        const conta = parseInt(n1) * parseInt(n2);
        setTotal(conta.toString());
    }

    function Divisao() {
        const conta = parseInt(n1) / parseInt(n2);
        setTotal(conta.toString());
    }

    function Resetar() {
        setN1(0);
        setN2(0);
        setTotal(0);
      }

    
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>

            <Text style={styles.txtSaida}>Calculadora Básica</Text>

            <Text style={styles.textLabel}>1º número</Text>
            <TextInput style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN1(entrada) }
                value={n1}
                />
            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}>2º número</Text>
            <TextInput style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN2(entrada) }
                value={n2}
            />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput style={styles.txtEntrada} 
                editable={false}
                value={total}
            />

            <View style={styles.botoes}>
            <TouchableOpacity style={style.button} onPress={() => Soma()}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => Subtracao()}>
                <Text style={styles.textButton}> - </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => Multiplicacao()}>
                <Text style={styles.textButton}> * </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => Divisao()}>
                <Text style={styles.textButton}> / </Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.button} onPress={() => Reseta()}>
                <Text style={styles.textButton}> ZERAR </Text>
            </TouchableOpacity>
        </View>
    )
}