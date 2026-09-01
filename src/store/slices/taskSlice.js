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
        }
    }
});

export const { addTask } = taskSlice.actions

export const selectTasks = (state) => state.tasks.tasks
export const selectPendingTasks = (state) => state.tasks.tasks.filter((task) => !task.completed)
export const selectCompletedTasks = (state) => state.tasks.tasks.filter((task) => task.completed)

export default taskSlice.reducer