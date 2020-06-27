import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import {remGoal} from "../actions/index";

const GoalItem = props => {
    console.log(props);
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(remGoal(id))
    }
}

export default connect(null, mapDispatchToProps)(GoalItem);