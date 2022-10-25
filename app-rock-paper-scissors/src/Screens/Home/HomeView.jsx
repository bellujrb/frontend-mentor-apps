import { View } from 'react-native';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer'

const HomeView = ({ styles, buttonPaper, buttonScissors, buttonRock, devResults }) => {

    return (
            <View style={styles.container}>
                <Header/>
                <Main buttonPaper={buttonPaper}
                buttonScissors={buttonScissors}
                buttonRock={buttonRock}
                devResults={devResults}
                />
                <Footer/>
            </View>
    )
}

export default HomeView;