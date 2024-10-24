import * as React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Entypo} from '@expo/vector-icons'

export default function Button ({title,onpress,icon,color}){
    return (
        <TouchableOpacity onPress={onpress} style={styles.button}>
            <Entypo name={icon} size={25} color={color ? color : 'white'} />
            <Text style={styles.text}>{title}</Text> 
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button : {
        height:40,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    }, 
    text : {
        fontWeight: 'bold',
        fontSize : 16,
        color: 'white',
        marginLeft:10
    }
})