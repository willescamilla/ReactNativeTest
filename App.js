import React from 'react';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import GoalScreen from "./components/GoalScreen";

const initial_state = {
  courseGoals: []
}

const store = createStore(
  (state = initial_state, {type, payload}) => {
    switch (type) {
      case "ADD_GOAL": {
        console.log(payload)
        return {
          courseGoals: [...state.courseGoals, {key: payload.key.toString(), value: payload.text}]
        }
      }
      case "REM_GOAL": {
        return {
         courseGoals: [...state.courseGoals].filter((goal) => goal.key != payload.id)
        }
      }
      default: return state
    }
  }
)

export default function App() {
  return (
    <Provider store={store}>
      <GoalScreen />
    </Provider>
  );
}