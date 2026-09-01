import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice'
import themeReducer from './slices/themeSlice'
import analyticsReducer from './slices/analyticSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
    analytics: analyticsReducer
  },

  devTools: process.env.NODE_ENV !== 'production'
})
