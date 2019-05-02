import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity 
} from 'react-native';
import { connect } from 'react-redux';

import { setTeamName } from '../../store/actions/index';

class TeamCreateScreen extends Component {

    teamNameChangedHandler = (name) => {
        this.setState({
            teamName: name,
            teamNameValid: false,
        });
    };

    teamNameSubmitHandler = () => {
        if (this.state.teamName.trim() === "") {
            return;
        }

        this.props.teamNameSubmitHandler(this.state.teamName);
    }

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
                value={this.props.teamName}
                autoFocus={true}
                onChangeText={this.teamNameChangedHandler}
                placeholder="Team Name"
            />
        );
    }

    _renderContinueButton() {
        return (
            <TouchableOpacity
                style={styles.submitButton}
                onPress={this.teamNameSubmitHandler}
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

const mapStateToProps = (state) => {
    return {
        teamName: state.teamName,
        teamNameValid: state.teamNameValid,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        teamNameSubmitHandler: (teamName) => dispatch(setTeamName(teamName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreateScreen);