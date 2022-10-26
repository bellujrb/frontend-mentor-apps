import React, { useContext, useEffect} from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native'
import { GamerContext } from '../../Global/GamerContext'

const Duel = ({ playAgain }) => {

    const context = useContext(GamerContext);

    useEffect(() => {

        if (context.play1 == "Paper" && context.play2 == "Rock"){
            context.setMessage("YOU WIN")
        } else if (context.play1 == "Rock" && context.play2 == "Paper"){
            context.setMessage("YOU LOSER")
        }

        if (context.play1 == "Rock" && context.play2 == "Scissors"){
            context.setMessage("YOU WIN")
        } else if (context.play1 == "Rock" && context.play2 == "Scissors"){
            context.setMessage("YOU LOSER")
        } 

        if (context.play1 == "Scissors" && context.play2 == "Paper"){
            context.setMessage("YOU WIN")
        } else if (context.play1 == "Scissors" && context.play2 == "Paper"){
            context.setMessage("YOU LOSER")
        }

    })

    const getImageSrc = () => {
            
        let src;

        if(context.play1 === "Paper"){
            src=require('../../Images/paper.png')
        } else if (context.play1 === "Scissors"){
            src=require('../../Images/scissors.png')
        } else if (context.play1 === "Rock"){
            src=require('../../Images/rock.png')
        }

        return src;
    }

    const getImageSrc2 = () => {
            
        let src;

        if(context.play2 === "Paper"){
            src=require('../../Images/paper.png')
        } else if (context.play2 === "Scissors"){
            src=require('../../Images/scissors.png')
        } else if (context.play2 === "Rock"){
            src=require('../../Images/rock.png')
        }

        return src;
    }

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
                            source={getImageSrc()}
                        />
                        <Text style={styles.text}>YOU PICKED</Text>
                    </View>
                    <View style={styles.align2}>
                        <Image
                            source={getImageSrc2()}
                        />
                        <Text style={styles.text}>{context.message}</Text>
                    </View>
                </View>
                <View style={styles.results}>
                    <Text style={styles.resultstext}>{context.message}</Text>
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