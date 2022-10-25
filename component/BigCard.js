import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BigCard = ({item}) => {
  const navigation =useNavigation();
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() =>navigation.navigate('Details',item)}>
    <Image source={item.img} style={styles.image}/>
  
  <View style={{margin:10}}>
   <Text style={styles.date}>{item.title}</Text>
   <Text style={styles.eventName}>{item.name}</Text>
   <Text style={styles.location}>{item.location}</Text>

   <View style={{flexDirection:'row',margin:4,}}>
    <Text style={styles.ticketSold}>{item.ticket}</Text>

    <View style={styles.button}>
    <Image source={require('../assets/Export.png')} style={{height:24,width:24}}/>
    <Image source={require('../assets/HeartStraight.png')}  style={{height:20,width:20,marginLeft:20}}/>
    </View>
   </View>
  </View>
  </TouchableOpacity>
  )
}

export default BigCard

const styles = StyleSheet.create({
    cardContainer:{
        width:windowWidth/1.1,
        borderRadius:10,
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0.2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        
        elevation: 1,
        backgroundColor:'white'
      },
      image:{width:"100%",
      height:windowHeight/3.5,
      borderTopRightRadius:10,
      borderTopLeftRadius:10
    
    },
    date:{
      color:'#5C0FBE',
      fontSize:14,
      fontWeight:'500',
      lineHeight:22
    },
    eventName:{
      color:'#151515',
      fontSize:16,
      fontWeight:'500',
      lineHeight:22
    },
    location:{
      color:'#737373',
      lineHeight:25,
      fontSize:15,
    },
    button:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    ticketSold:{
      flex:1,
      color:'#9A9A9A',
      lineHeight:18,
      fontSize:15
    },
})