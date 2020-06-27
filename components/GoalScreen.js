import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Button, FlatList, ActionSheetIOS} from 'react-native';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const GoalScreen = props => {

    console.log(props.courseGoals);
    const [isAddMode, setIsAddMode] = useState(false);

    const endInputDisplay = () => {
        setIsAddMode(false);
      };
    
    return (
        <View style={styles.screen}>
        <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          close={endInputDisplay}
        />
        <FlatList
          data={props.courseGoals}
          renderItem={itemData =>
            <GoalItem
              id={itemData.item.key}
              title={itemData.item.value}
            />
          }
        />
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    }
  });

const mapStateToProps = (state) => {
    return {
        courseGoals: state.courseGoals
    }
  }
  
  export default connect(mapStateToProps)(GoalScreen);