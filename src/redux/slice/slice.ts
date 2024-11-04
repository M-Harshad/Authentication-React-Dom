import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  content: string,
  StoredContent: string[],
  todo: string[],
  inProgress: string[],
  completed: string[],
}

const initialState: CounterState = {
  content: '',
  StoredContent: [],
  todo: [],
  inProgress: [],
  completed: [],
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<string>) {
        state.content = action.payload;
      },
    setStoredContent(state, action: PayloadAction<string>) {
        state.StoredContent.push(action.payload);
      },
      removeStoredContent(state, action: PayloadAction<string>) {
        state.StoredContent = state.StoredContent.filter(i => i !== action.payload);
      },
      removeTodo(state, action: PayloadAction<string>) {
        state.todo = state.todo.filter(i => i !== action.payload);
      },
      removeInProgress(state, action: PayloadAction<string>) {
        state.inProgress = state.inProgress.filter(i => i !== action.payload);
      },
      removeCompleted(state, action: PayloadAction<string>) {
        state.completed = state.completed.filter(i => i !== action.payload);
      },
      setTodo(state, action: PayloadAction<string[]>) {
        state.todo = action.payload;
      },
      setInProgress(state, action: PayloadAction<string[]>) {
        state.inProgress = action.payload;
      },
      setCompleted(state, action: PayloadAction<string[]>) {
        state.completed = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setInput, setStoredContent, removeStoredContent, removeCompleted, removeInProgress, removeTodo, setTodo, setInProgress, setCompleted } = inputSlice.actions

export default inputSlice.reducer