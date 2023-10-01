import React from 'react'
import { View,Text, Image, StyleSheet } from 'react-native';
function SubTitle({children}) {
  return (
<View style={styles.subTitleCoontainer}>
     <Text style={styles.subTitle}>{children}</Text>
      </View>
  )
}

export default SubTitle;
const styles=StyleSheet.create({
    subTitle:{

        color:"#7e401c",
        fontWeight:'bold',
        fontSize:18,
       
        textAlign:'center',
        borderBottomColor:'white',
        borderBottomWidth:2
    },
    subTitleCoontainer:{
        padding:6,
        marginHorizontal:12,
        borderBottomColor:"#7e401c",
        borderBottomWidth:2
    }
})