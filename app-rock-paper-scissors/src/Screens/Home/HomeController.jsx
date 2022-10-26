import React, { useEffect, useState, useContext } from 'react'
import HomeView from './HomeView'
import { StyleSheet } from 'react-native'
import { GamerContext, GamerContextProvider } from '../../Global/GamerContext'
import { useNavigation } from '@react-navigation/native'

    const HomeController = () => {

    const context = useContext(GamerContext)

    const values = ['Paper', 'Scissors', 'Rock']

    const navigation = useNavigation()

    useEffect(() => {
        if (context.play1 != null && context.play2 != null) {
            navigation.navigate('PLAYING')
        } 
    }, [context])

    const buttonPaper = () => {

        if (context.play1 == null && context.number == 1){
            context.setPlay1("Paper")
        }

        if (context.play2 == null && context.number ==2){
            context.setPlay2("Paper")
        }

        context.setNumber(context.number + 1)
    }

    const buttonScissors = () => {

        if (context.play1 == null && context.number == 1){
            context.setPlay1("Scissors")
        }

        if (context.play2 == null && context.number == 2){
            context.setPlay2("Scissors")
        }

        context.setNumber(context.number + 1)
    }

    const buttonRock = () => {

        if (context.play1 == null && context.number == 1){
            context.setPlay1("Rock")
        }

        if (context.play2 == null && context.number ==2){
            context.setPlay2("Rock")
        }

        context.setNumber(context.number + 1)
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