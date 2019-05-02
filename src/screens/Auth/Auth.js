import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions, Platform } from 'react-native';

import KallendrLogo from '../../assets/kallendr.png';

import startMainTabs from '../MainTabs/startMainTabs';
import startTeamCreate from '../TeamCreate/startTeamCreate';

// const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class AuthScreen extends Component {

    joinTeamHandler = () => {
        startMainTabs();
    }

    createTeamHandler = () => {
        startTeamCreate();
    }

    _renderNativeButton = () => {
        return [(
            <TouchableOpacity style={styles.joinTeamButton} onPress={this.joinTeamHandler}>
                <Text style={{
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>Join team</Text>
            </TouchableOpacity>
        ), (
            <TouchableOpacity style={styles.createTeamButton} onPress={this.createTeamHandler}>
                <Text style={{
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>Create team</Text>
            </TouchableOpacity>
        )];
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        source={KallendrLogo} 
                        style={styles.logo}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.joinTeamButtonContainer}>
                        { this._renderNativeButton()[0] }
                    </View>
                    <View style={styles.createTeamButtonContainer}>
                        { this._renderNativeButton()[1] }
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: deviceHeight / 5,
        width: 300,
        height: 100
    },
    buttonContainer: {
        // flex: 1,
        flexDirection: 'column',
    },
    joinTeamButtonContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    createTeamButtonContainer: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    joinTeamButton: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '65%',
        backgroundColor:'#9E88C7',
        borderColor: '#fff'
    },
    createTeamButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '65%',
        backgroundColor:'#F79F04',
        borderColor: '#fff'
    },
});

export default AuthScreen;