import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { useNavigation } from '@react-navigation/native'

// import { GoogleSignin } from '@react-native-google-signin/google-signin'

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // in case if you want to apply a condition to sign in with google

    // const signInWithGoogle = async () => {
    //     try {
    //         await GoogleSignin.configure({
    //             scopes: ['email'],
    //             webClientId: 'your-web-client-id.apps.googleusercontent.com', // Your web client id
    //             offlineAccess: true,
    //             forceCodeForRefreshToken: true,
    //         });
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log(userInfo);
    //         // Here you can handle the user info returned by Google sign-in
    //     } catch (error) {
    //         console.error(error);
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             console.log('Sign in cancelled');
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             console.log('Sign in in progress');
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             console.log('Play services not available');
    //         } else {
    //             console.error('Error occurred while signing in:', error);
    //         }
    //     }
    // };


    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email.trim()) {
            Alert.alert('Error', 'Email address cannot be empty');
        } else if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
        } else if (password.length < 6 || password.length > 12) {
            Alert.alert('Error', 'Password should be between 6 to 12 characters');
        } else {
            Alert.alert('Success', 'Login successful');
            navigation.navigate('Home');
        }
    
        setEmail('');
        setPassword('');
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/loginLogo.jpg')} style={styles.logo} />
            <Spacer width={'90%'} borderWidth={3} color={'rgba(255,0,0,0.2)'} />

            <View style={styles.card}>
                <Text style={styles.loginText}>Login Here</Text>
                <Spacer width={'90%'} borderWidth={0.2} color={'grey'} />
                <TextField icon={require('../../assets/email.jpg')}
                    width={'90%'}
                    backgroundColor='white'
                    height={50}
                    placeholder={'Enter Email Address'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}

                />


                <TextField icon={require('../../assets/lock.png')}
                    width={'90%'}
                    backgroundColor='white'
                    height={50}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder={'Enter Password'}
                />
                <Button title={'Login'} bgColor={'red'} onPress={handleLogin} width={'90%'} height={50} foreColor={'white'} fontsize={18} />
                <Text style={{ color: 'black', marginTop: 5 }}>New User ? <Text style={{ color: 'blue', fontWeight: '500', fontSize: 16 }}>Register</Text></Text>

            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 40,
                gap: 20,
                height: 70,
                width: '83%',
                elevation: 2,
                backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 5
            }}>
                <Text style={{ marginVertical: 10, color: 'black', fontWeight: 'bold' }}>Or Sign In With</Text>

                <Image source={require('../../assets/google.png')} style={{ height: 40, width: 40 }} />
                <Image source={require('../../assets/facebook.png')} style={{ height: 40, width: 40 }} />
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'

    },
    logo: {
        height: 190,
        width: 200,
        marginTop: 20,
        borderRadius: 20

    },
    card: {
        height: 300,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 10,
        marginVertical: 10,
        alignItems: 'center',

    },

    loginText: {
        color: 'rgba(255, 0, 0, 1)',
        fontSize: 26, fontWeight: '600',
        marginVertical: 5,

    }
})