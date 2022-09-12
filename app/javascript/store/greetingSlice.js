import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  message: '',
}

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/greetings', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'same-origin',
    })
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
      state.message = action.payload[0]
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = greetingSlice.actions

export default greetingSlice.reducer