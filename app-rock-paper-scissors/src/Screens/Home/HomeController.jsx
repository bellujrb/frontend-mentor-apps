import React, { useEffect, useState, useContext } from 'react'
import HomeView from './HomeView'
import { StyleSheet } from 'react-native'
import { GamerContext, GamerContextProvider } from '../../Global/GamerContext'
import { useNavigation } from '@react-navigation/native'

    const HomeController = () => {

    const context = useContext(GamerContext)

    const values = ['Paper', 'Scissors', 'Rock']

    const randomPlay = Math.floor(Math.random() * values.length)

    const navigation = useNavigation()

    useEffect(() => {
        
        if (context.play1 != null && context.play2 != null) {
            navigation.navigate('PLAYING')
        } 

    }, [context])

    const buttonPaper = () => {

        if (context.play1 == null){
            context.setPlay1("Paper")
        }
        
        if (randomPlay == 0){
            context.setPlay2("Scissors")
        }
        if (randomPlay == 1){
            context.setPlay2("Rock")
        } else if (randomPlay == 2){
            context.setPlay2("Scissors")
        }
    }

    const buttonScissors = () => {

        if (context.play1 == null){
            context.setPlay1("Scissors")
        }

        if (randomPlay == 0){
            context.setPlay2("Rock")
        } else if (randomPlay == 1){
            context.setPlay2("Paper")
        } else if (randomPlay == 2){
            context.setPlay2("Rock")
        }
    }

    const buttonRock = () => {

        if (context.play1 == null){
            context.setPlay1("Rock")
        }

        if (randomPlay == 0){
            context.setPlay2("Paper")
        } else if (randomPlay == 1){
            context.setPlay2("Scissors")
        } else if (randomPlay == 2) {
            context.setPlay2("Paper")
        }

    }


    const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#131537'
        }
    })

    return (
        <HomeView
            styles={styles}
            buttonPaper={buttonPaper}
            buttonScissors={buttonScissors}
            buttonRock={buttonRock}
            values={values}

        />
    )
}

export default HomeController;