import { View } from 'react-native';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer'

const HomeView = ({ styles, buttonPaper, buttonScissors, buttonRock }) => {

    return (
        <View style={styles.container}>
            <Header/>
            <Main buttonPaper={buttonPaper}
            buttonScissors={buttonScissors}
            buttonRock={buttonRock}
            
            />
            <Footer/>
        </View>
    )
}

export default HomeView;