import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Card = ({title, description, id}) => {
  return (
    <View style={styles.card} key={id}
     >
        <Text className={styles.cardTitle}   > {title} </Text>
        <Text className={styles.cardDescription}>{description}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        padding: 15, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 16,
        color: '#444',
    },
})  

export default Card