import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import fonts from '../../utils/fonts';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleLogin = () => {
        Alert.alert(`Welcome back ${email}`, 'You are login success', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Hello Again 👋</Text>
            </View>
            <Text style={styles.subtitle}>Welcome back, you've been missed</Text>

            <View style={styles.inputSection}>
                <Image source={require('../../assets/images/envelope_icon.png')} style={styles.socialButtonIcon} />
                {email != '' && <Text style={{ position: 'absolute', top: 4, left: 50 }}>Email</Text>}
                <TextInput
                    style={styles.input}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholder="Email"
                    placeholderTextColor={'#94959F'}
                    value={email}
                    onChangeText={setEmail}
                />
                <TouchableOpacity onPress={() => setEmail('')}>
                    {(!emailFocused && email != '') ? <Image source={require('../../assets/images/correct_mark_success_icon.png')} style={[styles.socialButtonIcon, { opacity: .8 }]} />
                        : (emailFocused&&<Image source={require('../../assets/images/close_icon.png')} style={[styles.socialButtonIcon, { opacity: .8 }]} />)}
                </TouchableOpacity>
            </View>
            <View style={styles.inputSection}>
                <Image source={require('../../assets/images/closed_lock_icon.png')} style={[styles.socialButtonIcon, { opacity: .6 }]} />
                {password != '' && <Text style={{ position: 'absolute', top: 4, left: 50 }}>Password</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={'#94959F'}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                />
                <TouchableOpacity onPress={() => setPassword('')}>
                    {(passwordFocused && password != '') &&<Image source={require('../../assets/images/close_icon.png')} style={[styles.socialButtonIcon, { opacity: .8 }]} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {!showPassword ? <Image source={require('../../assets/images/9110850_eye_icon.png')} style={[styles.socialButtonIcon, { opacity: .6 }]} />
                        : <Image source={require('../../assets/images/8666649_eye_off_icon.png')} style={[styles.socialButtonIcon, { opacity: .6 }]} />}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPassword} onPress={() => { /* Handle forgot password logic */ }}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.loginButton, { backgroundColor: (password != '' && email != '') ? '#00B14F' : '#F2F2F2', }]} onPress={handleLogin}>
                <Text style={[styles.loginButtonText, { color: (password != '' && email != '') ? '#fff' : '#94959F', }]}>Sign in</Text>
            </TouchableOpacity>

            {/* <Text style={styles.socialLoginText}>Or use social media</Text> */}
            <View style={{ flexDirection: 'row', marginBottom: 20, }}>
                <View style={styles.lineSocialLoginText} />
                <Text style={styles.socialLoginText}>Or use social media</Text>
                <View style={styles.lineSocialLoginText} />
            </View>
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../../assets/images/instagram_logo_icon.png')} style={styles.socialButtonIcon} />
                    <Text style={styles.socialButtonText}>Continue with Instagram</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../../assets/images/Facebook_Logo.png')} style={styles.socialButtonIcon} />
                    <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../../assets/images/tiktok_logo_icon.png')} style={styles.socialButtonIcon} />
                    <Text style={styles.socialButtonText}>Continue with Tiktok</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.accountLink}>
                <Text style={[styles.accountLinkText, { color: '#17181B' }]}>Don't Have an Account ?</Text>
                <TouchableOpacity onPress={() => { /* Handle account creation logic */ }}>
                    <Text style={[styles.accountLinkText, { color: '#00B14F', marginHorizontal: 4 }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 4,
    },
    backButton: {
        padding: 10,
    },
    backArrow: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: fonts.Poppins,
        color: '#17181B',
        textAlign: 'center',
        // width:'100%'
    },
    subtitle: {
        fontSize: 16,
        color: '#94959F',
        fontWeight: '500',
        fontFamily: fonts.Poppins,
        textAlign: 'center',
        marginBottom: 24,
    },

    inputSection: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        marginBottom: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 12,
        // borderWidth:1,
        // borderColor:'red'
    },
    input: {
        flex: 1,
    },
    forgotPassword: {
        marginBottom: 16,
    },
    forgotPasswordText: {
        color: '#00B14F',
        textAlign: 'right',
        fontFamily: fonts.Poppins,
        fontWeight: '500',
    },
    loginButton: {
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: fonts.Poppins,
    },
    socialLoginText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3a3a3d',
        paddingHorizontal: 8,
    },
    lineSocialLoginText: {
        backgroundColor: '#d2d2d4',
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    socialButtonsContainer: {
        marginBottom: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#F9FAFB',
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    socialButtonIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    socialButtonText: {
        fontSize: 16,
        color: '#17181B',
        fontWeight: '700',
        fontFamily: fonts.Poppins,
    },
    accountLink: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    accountLinkText: {
        fontSize: 16,
        fontFamily: fonts.Poppins,
    },
});

export default Login;