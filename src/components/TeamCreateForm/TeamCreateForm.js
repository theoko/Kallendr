import React, { Component } from 'react';
import {
    Image,
    Button,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    View,
  } from 'react-native';

class TeamCreateForm extends Component {

    state = {
        teamName: ""
    };

    _renderHeader() {
        return (
            <Text style={styles.getStartedText}>
                First, set a team name
            </Text>
        );
    };

    _renderTeamNameInput() {
        return (
            <TextInput
                style={styles.inputField}
                value={this.state.teamName}
                autoFocus={true}
                onChangeText={this.props.teamNameChangedHandler}
                placeholder="Team Name"
            />
        );
    }

    _renderContinueButton() {
        return (
            <TouchableOpacity
                style={styles.submitButton}
                onPress={this.props.onTeamNameSubmitHandler}
                underlayColor='#fff'>
                <Text style={styles.submitButtonText}>Continue</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>

                { this._renderHeader() }

                { this._renderTeamNameInput() }
                
                { this._renderContinueButton() }

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    getStartedText: {
        padding: 20,
        fontSize: 25,
        color: '#000000',
        lineHeight: 24,
        textAlign: 'center',
    },
    inputField: {
        borderWidth: 1,
        borderColor: "#fff",
        height: 40,
        width: "80%",
    },
    helpContainer: {
        width: "100%",
        marginTop: 15,
        alignItems: 'center',
    },
    submitButton: {
        paddingTop: 8,
        height: 40,
        backgroundColor:'#4286f4',
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitButtonText: {
        color:'#fff',
        fontSize: 18,
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
});

export default TeamCreateForm;