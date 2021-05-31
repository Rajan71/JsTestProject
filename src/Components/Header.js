import React, { useState, } from 'react';

import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    FlatList,
    SafeAreaView

} from 'react-native';

const windowWidth = Dimensions.get('window').width


const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>ToDo</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: '#FB793B',
         width: windowWidth,
          height: windowWidth * 0.15,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textStyle:{
        color: '#fff', 
        fontSize: 22, 
        fontWeight: 'bold' 
    }
})

export default Header;