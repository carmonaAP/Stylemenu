import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/LoginScreenStyles';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'aluno' && password === 'Senai1234') {
            navigation.navigate('Home');
        } else if (username === 'root' && password === 'root') {
            navigation.navigate('AdminHome');
        } else {
            setErrorMessage('Usuário ou senha incorretos');
            setTimeout(() => setErrorMessage(''), 2000);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Cadastro');
    };

    const handleForgotPassaword = () => {
        navigation.navigate('ForgotPassaword');
    };

    return (
        <View style={styles.container}>
            {/* Balão estilizado */}
            <View style={styles.bubbleContainer}>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Logo</Text>
                    <Text style={styles.bubbleText}>Empresa</Text>
                </View>
            </View>

            {/* Titulo */}
            <Text style={styles.title}>Bem-Vindo!</Text>

            <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            />

            <TextInput
            style={styles.input}    
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />

           <TouchableOpacity style = {styles.loginButton} onPress={handleLogin}>
            <Text style = {styles.loginButtonText}>Login</Text>
           </TouchableOpacity>
           {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

           <TouchableOpacity onPress={handleRegister}>
            <Text style = {styles.link}>Cadastre-se</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={handleForgotPassaword}>
            <Text style = {styles.link}>Esqueci minha senha</Text>
           </TouchableOpacity>
        </View>
    );
}


