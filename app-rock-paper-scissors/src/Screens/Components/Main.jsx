import { View, Text, Image, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';

const Main = ({ buttonPaper, buttonScissors, buttonRock, devResults }) => {

    const styles = StyleSheet.create({
        main:{
            alignItems: 'center',
            marginTop: 40,
        },
        game:{
            flexDirection: 'row',
            position: 'relative',
        },
        img:{
            transform:[{translateX: -15}],
            zIndex: 1
        },
        img2:{
            transform:[{translateX: 15}],
            zIndex: 1
        },
        img3:{
            transform: [{translateY: -170}],
            marginLeft: 5,
            zIndex: 1
        },
        triangle:{
            transform: [{translateY: -80}]
        }
    })

    return (
        <View style={styles.main}>
            <View style={styles.game}>
                <TouchableOpacity onPress={ buttonPaper } style={styles.img}>
                    <Image
                        source={require('../../Images/paper.png')}
                    />
                </TouchableOpacity>  
                <TouchableOpacity onPress={ buttonScissors } style={styles.img2}>              
                    <Image
                        source={require('../../Images/scissors.png')}
                    />
                </TouchableOpacity>        
            </View>
                    <Image
                        source={require('../../Images/triangle.png')}
                        style={styles.triangle}
                    />
            <View>
                <TouchableOpacity onPress={ buttonRock } style={styles.img3}>
                    <Image
                            source={require('../../Images/rock.png')}
                        />
                </TouchableOpacity>    
            </View>
        </View>
    )
}

export default Main;