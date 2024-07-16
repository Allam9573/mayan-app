import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const LoginScreen = (props) => {
    const { navigation } = props
    const goTo = (screen) => navigation.navigate(screen)
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.title}>Welcome to Mayan App</Text>
            <View style={styles.inputContainer}>
                <Text>Email Address</Text>
                <TextInput
                    placeholder="hello@example.com"
                    style={styles.inputEmail}
                />
                <View style={styles.titlePassContainer}>
                    <Text>Password</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#002a52', fontWeight: 'bold' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="hello@example.com"
                    style={styles.inputEmail}
                />
                <TouchableOpacity onPress={() => goTo('Home')} style={styles.loginBtn}>
                    <Text style={styles.textLoginBtn}>Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textOr}>or sign in with</Text>
            <TouchableOpacity style={styles.btnGoogle}>
                <Image style={styles.logoGoogle} source={require('../assets/images/google.png')} />
                <Text style={{ color: '#636363' }}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textAccount}>Create an account</Text>
            </TouchableOpacity>
        </View>
    )
}
export { LoginScreen }

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginHorizontal: 'auto',
        marginTop: 20,
    },
    title: {
        color: '#002a52',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {
        marginTop: 20
    },
    inputEmail: {
        borderWidth: 1,
        borderColor: '#9C9C9C',
        paddingVertical: 10,
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    titlePassContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    loginBtn: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#002a52',
        marginHorizontal: 'auto',
        paddingVertical: 15,
        borderRadius: 10
    },
    textLoginBtn: {
        color: '#fff',
        textAlign: 'center'
    },
    logoGoogle: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    btnGoogle: {
        width: '100%',
        backgroundColor: '#cacaca',
        flexDirection: 'row',
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textOr: {
        marginVertical: 20,
        textAlign: 'center',
        color: '#898989'
    },
    textAccount: {
        color: '#002a52',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 15
    }
})