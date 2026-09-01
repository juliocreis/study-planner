import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const taskWithId = {
                ...action.payload,
                id: Date.now(),
                completed: false
            }

            state.tasks = [...state.tasks, taskWithId];
        },

        toggleTaskComplete: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if(action.payload === task.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            })
        }
    }
});

export const { addTask, toggleTaskComplete } = taskSlice.actions

export const selectTasks = (state) => state.tasks.tasks
export const selectPendingTasks = (state) => state.tasks.tasks.filter((task) => !task.completed)
export const selectCompletedTasks = (state) => state.tasks.tasks.filter((task) => task.completed)

export default taskSlice.reducer