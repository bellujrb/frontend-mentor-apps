import React from 'react';
import HomeView from './HomeView'
import { StyleSheet } from 'react-native';

const HomeController = () => {

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#131537'
        }
    })
    
    return (
        <HomeView
        styles={styles}
        />
    )
}

export default HomeController;