import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import logo from '../assets/login_logo.png';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 30 }}>
                <View style={styles.logo}>
                    <Image source={logo} resizeMode="contain" style={{ width: 100 }} />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>Email Address</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="mail" size={24} color="black" />
                        <TextInput style={styles.inputField} value="Username@gmail.com" />
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>Password</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="lock" size={30} color="black" />
                        <TextInput style={styles.inputField} value="password1234" secureTextEntry={!showPassword} />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <MaterialCommunityIcons name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.75}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnTxt}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Text style={styles.footerText}>Signup</Text>
                    <Text style={styles.footerText}>Forgot Password?</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        backgroundColor: "#3d4886",
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 100
    },
    fieldContainer: {
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 20,
        elevation: 4,
        marginBottom: 30
    },
    fieldLabel: {
        fontSize: 18,
        color: '#7e7e7e',
        marginBottom: 10
    },
    inputField: {
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10
    },
    loginBtn: {
        backgroundColor: '#3d4886',
        paddingVertical: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    footerText: {
        color: "#64686e",
        fontSize: 16
    }
});
