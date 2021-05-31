import React, { useState, } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,

} from 'react-native';



const windowWidth = Dimensions.get('window').width

const AddToDo = ({addHandler}) => {
    const [text, setText] = useState('')
   
    const Handler = (val) => {
        setText(val)
    }

    return (
        <View style={{}}>
            <TextInput
            style={styles.inputViewStyle}
                placeholder='add todo...'
                onChangeText={Handler}
            />
            <View>
                <TouchableOpacity style={styles.btnStyle}
            onPress={()=>addHandler(text)}
            >
                   <Text style={styles.textStyle}>Add</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    inputViewStyle:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
        paddingLeft:10,width:windowWidth*0.85,
        height:windowWidth*0.12
    },
    btnStyle:{
        width:windowWidth*0.85,
        height:windowWidth*0.12,
        backgroundColor:'#FB793B',
        marginTop:20,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold'
    }
})

export default AddToDo