import { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, Image} from 'react-native';
import { StyleSheet } from 'react-native';

const Footer = () => {

    const [modal, setModal] = useState(false)

    const rules = () => {
        alert("SYSTEM IN DEVELOPMENT")
    }

    const openModal = () =>{
        setModal(true);
    }

    const closeModal = () => {
        setModal(false)
    }

    const styles = StyleSheet.create({
        footer:{
            alignItems: 'center',
            transform: [{translateY: -40}]
        },
        button:{
            width: 128,
            height: 40,

            textAlign: 'center',
            borderRadius: 8,
            borderWidth: 1,

            borderColor: 'white',
        },
        textbutton:{
            color: 'white',

            textAlign: 'center',
            marginTop: 7.5
        },

        modal:{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center'
        },
        modaltext:{
            fontSize: 32,
            color: '#3B4262',

            marginTop: 100
        },
        linerules:{
            flexDirection: 'row',
            marginTop: 60
        },

        rulesimg1:{
            transform: [{translateX: -15}]
        },
        rulesimg2:{
            transform: [{translateY: 40}]
        },
        rulesimg3:{
            transform: [{translateX: 15}]
        },
        rulesimg4:{
            transform: [{translateX: -25}]
        },
        rulesimg5:{
            transform: [{translateX: 5}]
        },
        rulesimg6:{
            transform: [{translateY: -170}, {translateX: 80}]
        },
        closemodal:{
            marginTop: 60
        },
    })

    return (
        <View style={styles.footer}>
            
            <View>
                <TouchableOpacity style={styles.button} onPress={openModal}>
                    <Text style={styles.textbutton}>RULES</Text>
                </TouchableOpacity>
            </View>
            
            <Modal transparent={false} visible={modal} animationType="slide">
                <View style={styles.modal}>
                    <Text style={styles.modaltext}>RULES</Text>
                        <View style={styles.linerules}>
                            <Image
                                source={require('../../../Images/Rules/paper.png')}
                                style={styles.rulesimg1}
                            />
                            <Image
                                source={require('../../../Images/Rules/arrow.png')}
                                style={styles.rulesimg2}
                            />
                            <Image
                                source={require('../../../Images/Rules/scissors.png')}
                                style={styles.rulesimg3}
                            />
                        </View>
                        <View style={styles.linerules2}>
                            <Image
                                source={require('../../../Images/Rules/arrow2.png')}
                                style={styles.rulesimg4}
                            />
                            <Image
                                source={require('../../../Images/Rules/rock.png')}
                                style={styles.rulesimg5}
                            />
                            <Image
                                source={require('../../../Images/Rules/arrow3.png')}
                                style={styles.rulesimg6}
                            />                            
                        </View>
                            <TouchableOpacity onPress={closeModal}>
                                <Image
                                    source={require('../../../Images/Rules/close.png')}
                                    style={styles.closemodal}
                                />                  
                            </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default Footer;