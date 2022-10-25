import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const Card = ({item}) => {
  const navigation =useNavigation();
  return (
    <TouchableOpacity onPress={() =>navigation.navigate('Detail',item)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImage}>
          <Image source={item.img} style={styles.image} />
        </View>
        <View style={styles.detailCard}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.Artist}>{item.Artist}</Text>
            <Text style={styles.location}>{item.location}</Text>

            <View style={styles.iconContainer}>
              <Text style={styles.ticket}>{item.ticket}</Text>
              <View style={styles.iconMain}>
              <Image source={require('../assets/Export.png')} style={{height:24,width:24}}/>
    <Image source={require('../assets/HeartStraight.png')}  style={{height:20,width:20,marginLeft:20}}/>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
  },
  cardImage: {
    height: 106,
    width: 106,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailCard: {
    height: 96,
    borderRadius: 10,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: "#5C0FBE",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 5,
  },
  Artist: { 
    color: "#151515",
     fontSize: 16,
      lineHeight: 20,
       marginBottom: 6,
       },
  location: {
     color: "#737373", 
     lineHeight: 20, 
     fontSize: 15,
      marginBottom: 5
     },
  iconContainer: { 
    flexDirection: "row", 
    marginTop: 4
   },
  ticket: { 
    flex: 1, 
    color: "#737373",
     fontSize: 14,
      lineHeight: 20 
    },
  iconMain: {
     flexDirection: "row",
     alignItems:'center',
     },
  line: { 
    height: 1,
     backgroundColor: "#EFEFEF",
      width: "100%"
     },
});
