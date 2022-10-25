import React, { useState, useMemo } from "react";
import { Image, Dimensions, TouchableOpacity, StyleSheet, Text, View, SafeAreaView, } from "react-native";
import PageView from 'react-native-pager-view'
import CustomButton from "./Button";

import OnboardingSlide from "./OnboradingSlide";
import Slide from "./Slide";

const { height } = Dimensions.get('screen')

const pages = [
    {
        title: "Get information about local events",
        imgSrc: require('../assets/sit.png')
    },
    {
        title: "Split bills with friends",
        imgSrc: require('../assets/happy.png')
    },
    {
        title: "Get tickets for your favourite shows",
        imgSrc: require('../assets/party.png')
    }
]

export default function SplashScreen({ navigation }) {
    const [currentSlideNumber, setSlideNumber] = useState(0)

    return (
        <SafeAreaView style={styles.container} >
        
        <View style={{marginTop:20}}>
            <Image 
                style={require('../assets/flogo.png')}/>
        </View>

            <View>
                <PageView
                    onPageScroll={
                        ({ nativeEvent }) => {
                            if (nativeEvent.position !== currentSlideNumber) setSlideNumber(nativeEvent.position)
                        }
                    }
                    style={{ height: "75%" }}
                    initialPage={0}
                >
                    {
                        pages.map(({ title, subTitle, imgSrc }, index) => (
                            <OnboardingSlide key={index} title={title} subTitle={subTitle} imgSrc={imgSrc} />
                        ))
                    }
                </PageView>

                <View style={[styles.alignCenter, { marginTop: 10, flexDirection: 'row' }]} >
                    {pages.map((_, index) => (
                        <Slide key={index} selected={index === currentSlideNumber} />
                    ))}
                </View>
            </View>

            <View style={styles.alignCenter} >
                <CustomButton  buttonHandler={() => navigation.navigate('signup')} text={'Get Started'} backgroundColor='#7A1FEE' color='white' />
                <CustomButton  buttonHandler={() => navigation.navigate('signup')} text={'Login'}  backgroundColor='#FFFFFF'/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
       marginVertical:90
    }
});