import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather,FontAwesome } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Data from '../assets/data/Data'
import bigData from '../assets/data/bigData'
import Card from '../component/Card';
import { useNavigation } from '@react-navigation/native';
import BigCard from '../component/BigCard';
const HomeScreen = () => {
  const navigation =useNavigation();
  return (
    <ScrollView style={{paddingVertical:40,backgroundColor:'white'}}>
      <View>
        <Text style={{fontSize:16,fontWeight:"500",color:'#747474',lineHeight:21,marginBottom:5,}}>Find events in</Text>
        <View style={{flexDirection:'row',marginRight:10,}}>
          <Text style={{fontSize:26,fontWeight:'700',lineHeight:32,marginBottom:35}}>Eti-Osa</Text>
          <Feather name="chevron-down" size={24} color="black" />
        </View>
      </View>

        <Text style={styles.categoryText}>Popular in Lagos</Text>
        <FlatList
        data={bigData}
        renderItem={({item}) => <BigCard item={item}/>}
        keyExtractor={(item) => item.id}
        />

      <FlatList
        data={Data}
        renderItem={({item}) => <Card item={item}/>}
        keyExtractor={(item) => item.id}
       
      />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categoryText:{
    fontSize:20,
    fontWeight:'700',
    lineHeight:26,
    color:'#151515',
    marginBottom:20
  },
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