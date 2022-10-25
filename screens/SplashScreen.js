import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/flogo.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#7A1FEE'
    },
    logo:{
        width:90,
        height:90,


    }
})