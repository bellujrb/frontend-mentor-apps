import { useContext } from 'react';
import { View, Text, Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { GamerContext } from '../../Global/GamerContext'

const Header = () => {

    const context = useContext(GamerContext);

    const styles = StyleSheet.create({
        header:{
            alignItems: 'center',
        },
        score:{
            width: 315,
            height: 100,
            borderColor: '#565468',
            borderRadius: 6,
            borderWidth: 2,

            marginTop: 30,

            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        img:{
            marginTop: 25
        },
        score2:{
            width: 86,
            height: 72,

            marginTop: 12,
            borderRadius: 5,
            borderWidth: 1,

            backgroundColor: 'white'
        },
        textscore:{
            fontWeight: '600',
            fontSize: 10,

            textAlign: 'center',
            letterSpacing: 1.5,

            marginTop: 10,
            color: '#2A45C2'
        },
        numberscore:{
            marginTop: 6,

            fontWeight: '700',
            fontSize: 14,

            textAlign: 'center',

            color: '#565468'
        }
    })

    return (
            <View style={styles.header}>
                <View style={styles.score}>
                    <Image
                        source={require('../../Images/logo.png')}
                        style={styles.img}
                    />
                    <View style={styles.score2}>
                        <Text style={styles.textscore}>Score</Text>
                        <Text style={styles.numberscore}>{context.points}</Text>
                    </View>
                </View>
            </View>
    )
}

export default Header;