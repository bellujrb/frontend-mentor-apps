import { View } from 'react-native';
import Header from '../Components/Header';
import Duel from '../Components/Duel';
import Footer from '../Components/Footer';

const HomeView = ({ styles, playAgain }) => {

    return (
            <View style={styles.container}>
                <Header/>
                <Duel
                playAgain={playAgain}/>
            </View>
    )
}

export default HomeView;