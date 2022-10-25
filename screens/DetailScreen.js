import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons,Feather,MaterialCommunityIcons  } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const DetailScreen = ({route}) => {
  const item = route.params;
  const navigation =useNavigation();
  const goBack = () =>{
    navigation.goBack();
  }
  return (
    <SafeAreaView>
    <View style={{height:269,backgroundColor:'#EDDEFF'}}>
      <View style={{flexDirection:'row',padding:12,marginBottom:25}}>
      <Pressable onPress={goBack} style={{flex:1}}>
      <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>
      <View style={{flexDirection:'row'}}>
      <Feather name="heart" size={24} color="black" />
      <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={{marginLeft:10}} />
      </View>
      </View>
      <Image source={item.img} style={{width:windowWidth/1.09,alignSelf:'center',height:280,marginTop:40,borderRadius:20}}/>
      <View  style={styles.titleContainer}>
        <Text style={{fontSize:22,fontWeight:'700',lineHeight:28}}>{item.Artist}</Text>
      </View>
      {/* date */}
<View style={{flexDirection:'row',marginVertical:15,marginHorizontal:20}}>
      <Image source={require('../assets/CalendarBlank.png')} style={{width:20,height:20}}/>
        <View style={{flex:1,margin:5,marginHorizontal:15}}>
        <Text style={{fontSize:16,lineHeight:20,fontWeight:'500',marginBottom:5}}>Sat, Sep 29 </Text>
        <Text style={{color:'#9A9A9A',fontSize:15,lineHeight:20,fontWeight:'500'}}>2:10PM - 8:10PM</Text>
        <Text style={{color:'#7A1FEE',fontSize:15,lineHeight:19,fontWeight:'500',marginTop:5}}>Add to calendar</Text>
        </View>        
      </View>
      {/* location */}

      <View style={{flexDirection:'row',marginVertical:15,marginHorizontal:20}}>
      <Image source={require('../assets/MapPin.png')} style={{width:20,height:20}}/>
        <View style={{flex:1,margin:5,marginHorizontal:15}}>
        <Text style={{fontSize:16,lineHeight:20,fontWeight:'500',marginBottom:5}}>{item.location}</Text>
        <Text style={{color:'#9A9A9A',fontSize:15,lineHeight:20,fontWeight:'500'}}>{item.add}</Text>
        </View>        
      </View>
      {/* ticket sold */}
      <View style={{flexDirection:'row',marginVertical:15,marginHorizontal:20,alignItems:'center'}}>
      <Image source={require('../assets/Ticket.png')} style={{width:20,height:20}}/>
        <Text style={{fontSize:16,lineHeight:20,fontWeight:'500',marginLeft:14}}>{item.ticket}</Text>
      </View>

     {/* About*/}
      <View style={{marginLeft:20,marginVertical:40}}>
      <Text style={{fontSize:18,fontWeight:'700',lineHeight:22,bottom:10}}>About</Text>
      <Text style={{fontSize:16,fontWeight:'500',lineHeight:20,color:'#9A9A9A'}}>Lorem ipsum dolor sit amet, consectetur adipisn elit. Cras ut libero sit amet nisl ultrices...</Text>
      <Text style={{color:'#7A1FEE',fontSize:15,fontWeight:'500',lineHeight:18,top:10}}>Read more</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  titleContainer: {
   margin:20
  }
})