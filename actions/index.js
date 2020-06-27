let nextIdNum = 0
export const addGoal = text => ({
    type: "ADD_GOAL",
    payload: {key: nextIdNum++, text}
})

export const remGoal = id => ({
    type: "REM_GOAL",
    payload: {id}
})