import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native'

const Duel = ({ playAgain }) => {

    const styles = StyleSheet.create({
        duel:{
            alignItems: 'center',
            marginTop: 80,
        },
        duelx:{
            flexDirection: 'row',
            alignItems: 'center'
        },
        text:{
            marginTop: 10,

            fontWeight: '700',
            fontSize: 15,

            textAlign: 'center',
            color: 'white'
        },
        align1:{
            marginRight: 25
        },
        align2:{
            marginLeft: 25
        },
        results:{
            marginTop: 40,
            flexDirection: 'column'
        },
        resultstext:{
            fontWeight: '700',
            fontSize: 46,
            textAlign: 'center',
            color: 'white'
        },
        playagain:{
            marginTop: 15,
            marginLeft: 11,
            
            width: 220,
            height: 48,

            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 0.68
        },
        textpa:{
            textAlign: 'center',
            marginTop: 12,

            fontWeight: '600',
            letterSpacing: 2.5,
            color: '#3B4262',
            fontSize: 16
        }
    })

    return (
            <View style={styles.duel}>
                <View style={styles.duelx}>
                    <View style={styles.align1}>
                        <Image
                            source={require('../../Images/rock.png')}
                        />
                        <Text style={styles.text}>YOU PICKED</Text>
                    </View>
                    <View style={styles.align2}>
                        <Image
                            source={require('../../Images/paper.png')}
                        />
                        <Text style={styles.text}>THE HOUSE PICKED</Text>
                    </View>
                </View>
                <View style={styles.results}>
                    <Text style={styles.resultstext}>YOU LOSER</Text>
                    <TouchableOpacity onPress={playAgain}>
                        <View style={styles.playagain}>
                            <Text style={styles.textpa}>PLAY AGAIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Duel;