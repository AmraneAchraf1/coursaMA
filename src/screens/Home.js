import React, { useEffect, useRef } from "react";
import {  StyleSheet, Text, View, Animated, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";



const Home = () => {


  const moveDown = useRef(new Animated.Value(0)).current;

  



  const moveByClick = () => {
    Animated.spring(moveDown, {
      toValue: 1 ,
      friction: 1,
      tension: 20,
      
      useNativeDriver: false,
    }).start(
      ({finished}) => {
        if(finished){
          Animated.spring(moveDown, {
            toValue: 0,
            friction:1.5,
            tension: 20,
            useNativeDriver: false,
          }).start();
        }
      }
    );

  }

  return (
    <View style={styles.container}>

    <TouchableOpacity 
      activeOpacity={0.9}
      onPress={moveByClick}


      style={styles.button} >

    <Text>Move</Text>

    </TouchableOpacity>

    <Animated.View style={[
      styles.box,
      {
        transform: [
          { translateY: moveDown.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          })
           }
        ]
      }
    ]} >
    <Text>Box</Text>
    </Animated.View>
    

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,

  },
  button: {
    alignItems: "center",
    justifyContent : "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 200,
    marginBottom: 20,
    borderRadius: 10,
    

  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#6b5',
  }

});

export default Home;
