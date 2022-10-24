import React, { useEffect, useState, useContext } from 'react';
import HomeView from './HomeView'
import { StyleSheet } from 'react-native';
import { GamerContext, GamerContextProvider } from '../../Global/GamerContext';

const HomeController = () => {

    const context = useContext(GamerContext);

    const buttonPaper = () => {
        context?.setPlay1("Paper")
        alert("SELECTED PAPER")
    }

    useEffect(() => {
        if ((context?.play1 != null) && (context?.play2 != null)) {
            alert("JOGO COMECOU")
        }
    })

    const values = ["Paper", "Scissors", "Rock"];

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#131537'
        }
    })
    
    return (
        <GamerContextProvider>
            <HomeView
            styles={styles}
            buttonPaper={buttonPaper}

            values={values}
            />
        </GamerContextProvider>
    )
}

export default HomeController;