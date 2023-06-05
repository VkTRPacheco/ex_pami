import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9E9E9E',
        position: 'absolute',
        top: 300,
        left: 53
    },
    button1: {
        backgroundColor: '#9E9E9E',
        height: 60,
        width: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: 230,
        bottom: 340,
        alignItems: 'center'

    },
    button2: {
        backgroundColor: '#9E9E9E',
        height: 60,
        width: 70,
        flexDirection: 'row',
        justifyContent:'center',
        position: 'absolute',
        left: 90,
        bottom: 340,
        alignItems: 'center'
    },
    button3: {
        backgroundColor: '#9E9E9E',
        height: 40,
        width: 150,
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 280,

        
        
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    },
    counter: {
        borderWidth: 4,
        borderColor: '#9E9E9E',
        padding: 8,
        marginTop: 8,
        justifyContent: 'center',
    },
    textCounter: {
        fontSize: 32,
        color: '#424242',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        left: 185,
        bottom: 350,
        width: '70%',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 10,
        padding: 10
    }
});

export default styles