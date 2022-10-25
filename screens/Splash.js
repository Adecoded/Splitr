import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/logo.png')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#7A1FEE'
    },
    logo:{
        width:163,
        height:90,
    }
})