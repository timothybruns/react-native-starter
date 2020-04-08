import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = "Tim Bruns";
    return ( 
        <View>
            <Text style={styles.textStyle}>Getting started on the Log!</Text>
            <Text style={styles.subHeaderSize}>Hello my name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 45
    },
    subHeaderSize: {
        fontSize: 30
    }
});

export default ComponentsScreen;