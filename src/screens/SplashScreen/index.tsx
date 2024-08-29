import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}: {navigation: any}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
            
        }, 1000);
    }, [])
    
  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#181725',
    }}>

      <Image source={require('../../assets/images/logo.webp')} />

  </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})