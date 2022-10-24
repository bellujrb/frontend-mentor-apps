import { View } from 'react-native';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer'

const HomeView = ({ styles, buttonPaper }) => {

    return (
        <View style={styles.container}>
            <Header/>
            <Main/>
            <Footer/>
        </View>
    )
}

export default HomeView;