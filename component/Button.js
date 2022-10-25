import React from "react";
import { TouchableOpacity, StyleSheet, Text, View ,Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const CustomButton = ({text,backgroundColor,color}) => (
    <TouchableOpacity>
        <View
            style={[styles.button, styles.alignCenter,{backgroundColor}]}
        >
            <View>
                <Text style={{color:color}} >{text}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

export default CustomButton

const styles = StyleSheet.create({
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    button: {
        alignItems: "center",
        borderRadius: 45,
      width:windowWidth/1.09,

      height:58,
      margin:10,
    }
});