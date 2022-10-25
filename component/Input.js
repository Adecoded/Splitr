import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({name,placeholder}) => {
  return (

    <View style={styles.inputContainer}>
        <Text style={{marginLeft:10,fontSize:15,lineHeight:19,}}>{name}</Text>
        <View>
        <TextInput placeholder={placeholder} style={{padding:20,backgroundColor:'#E7E7E7',borderRadius:15,marginTop:10}}/>
        </View>
       
      </View>

  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        margin:10,
        marginHorizontal:15,
    }
})