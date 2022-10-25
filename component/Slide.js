import React from "react";
import { View } from "react-native";


const Slide = ({ selected }) => (
    <View
        style={{
            width:8,
            borderRadius: 7,
            height: 8,
            marginHorizontal: 3,
            backgroundColor: selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)"
        }}
    />
)

export default Slide