import React, { useEffect, useState, useContext } from 'react'
import HomeView from './HomeView'
import { StyleSheet } from 'react-native'
import { GamerContext, GamerContextProvider } from '../../Global/GamerContext'

    const HomeController = () => {

    const context = useContext(GamerContext)

    const values = ['Paper', 'Scissors', 'Rock']

    useEffect(() => {
        if (context.play1 != null && context.play2 != null) {
            alert("JOGO COMECOU!");
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

const ContextRun= () => {
    return (
        <GamerContextProvider>
            <HomeController />
        </GamerContextProvider>
    )
}

export default ContextRun