import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  message: '',
}

const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings')
    const data = await response.json()
    return data
  }
)

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = greetingSlice.actions

export default greetingSlice.reducer