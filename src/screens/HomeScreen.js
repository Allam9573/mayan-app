import { useEffect, useState } from "react"
import { FlatList, Image, ScrollView, StyleSheet, Text } from "react-native"
import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import DestinosService from "../services/DestinosService"

const HomeScreen = () => {
    const [destinos, setDestinos] = useState([
        { idPais: 1, nombre: 'Honduras' },
        { idPais: 2, nombre: 'Costa Rica' },
        { idPais: 3, nombre: 'Reino Unido' },
    ])

    useEffect(() => {
        setDestinos(destinos)
    }, [])

    const DestinosItems = ({ title }) => {
        return (
            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/images/images.jpeg')} />
                <Text style={styles.titleDestino}>{title}</Text>
                <TouchableOpacity style={styles.btnBuy}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Ver Destinos</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Paises</Text>
                <Text style={styles.subtitle}>con conexion Mayan</Text>
            </View>
            <View style={styles.content}></View>
            <FlatList
                style={styles.scroll}
                horizontal={true}
                data={destinos}
                renderItem={({ item }) => <DestinosItems title={item.nombre} />}
                keyExtractor={item => item.idPais}
            />


        </View>
    )
}
export { HomeScreen }
const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginTop: 30
    },
    subtitle: {
        color: 'white',
        marginLeft: 23,
        fontSize: 30
    },
    head: {
        backgroundColor: '#002a52',
        height: '30%',
    },
    content: {
        backgroundColor: 'white',
        height: '70%'
    },
    card: {
        backgroundColor: 'white',
        width: 200,
        height: 220,
        borderRadius: 10,
        elevation: 3,
        marginRight: 20,
        marginBottom: 10
    },
    image: {
        width: 200,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    scroll: {
        position: 'absolute',
        top: 150,
        marginHorizontal: 10
    },
    btnBuy: {
        backgroundColor: '#002a52',
        width: '70%',
        paddingVertical: 10,
        marginHorizontal: 'auto'
    },
    titleDestino: {
        fontWeight: 'light',
        marginVertical: 10,
        fontSize: 15,
        marginLeft: 10
    }
})