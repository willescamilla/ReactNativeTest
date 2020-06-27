import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal } from 'react-native';
import {connect} from 'react-redux';

import {addGoal} from "../actions/index";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const addGoal = (enteredText) => {
        if(enteredText.length === 0){
            return;
        }
        props.addGoalHandler(enteredText);
        setEnteredGoal('');
        props.close();
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={setEnteredGoal}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color="red" onPress={props.close} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={() => addGoal(enteredGoal)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },

    button: {
        width: '40%'
    }
});


const mapDispatchToProps = (dispatch) => {
    return {
        addGoalHandler: (text) => dispatch(addGoal(text))
    }
}

export default connect(null, mapDispatchToProps)(GoalInput);