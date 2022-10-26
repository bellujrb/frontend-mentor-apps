import React, { useContext }  from 'react'
import PlayingView from './PlayingView'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GamerContext } from '../../Global/GamerContext'

    const PlayingController = () => {

    const navigation = useNavigation()

    const context = useContext(GamerContext);

    const playAgain = () => {
        navigation.navigate('GAME')
        context.setNumber(1)
        
        context.setPlay1(null)
        context.setPlay2(null)
    }

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#131537'
        }
    })

    return (
        <PlayingView
            styles={styles}
            playAgain={playAgain}

        />
    )
}

export default PlayingController